import { useContext, createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({username: '', email: ''});
    const [token, setToken] = useState(null)
    const [loading, setIsLoading] = useState(true);
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        /*
        Function used for loadingTokens for when the user already logs in. If the users already logged in then we can just move to the profile :).
        Every time a user opens this app this will run this code.
        */
        const loadTokens = async () => {
            console.log('Loading tokens')
            const prevStoredToken = await AsyncStorage.getItem('access_token');
            console.log(prevStoredToken)

            if (prevStoredToken) {
                setToken(prevStoredToken)
                console.log(prevStoredToken)
                setIsLogged(true)

                setUser({...user, username: jwtDecode(prevStoredToken).username, email: jwtDecode(prevStoredToken).email
                })
                /*
                for the (...)
                Spread Operator: Expands iterable elements (arrays, strings, etc.) into individual elements.
                Rest Parameters: Collects remaining arguments into an array in function definitions.
                Object Spread: Copies enumerable properties from one object to another or merges objects. 
                 
                In this case the spread operator is what we're using and it essentially encapsulates our users state variables and updates them for us with our new values.
                The spread operator (...user) is used to create a new object that includes all existing properties of the user state. 
                This ensures that you're not mutating the original user object directly.
                */
            }
            setIsLoading(false);
        }

        loadTokens();
    }, []);


    const signIn = async(username, password) => {
        setIsLoading(true);
        try {
            const response = await axios.post('http://192.168.1.92:8000/api/token/', {
                username,
                password,
            });
            const { access, refresh } = response.data;
            await AsyncStorage.setItem('access_token', access)
            await AsyncStorage.setItem('refresh_token', refresh)
            console.log(jwtDecode(access));
            setToken(access);
            setIsLogged(true);
            console.log(isLogged)
        }
        catch(error) {
            console.log(error);
        }

        finally {
            setIsLoading(false);
        }
    }


    const signOut = async () => {
        setIsLoading(true);
        await AsyncStorage.removeItem('access_token');
        await AsyncStorage.removeItem('refresh_token');
        setToken(null)
        setIsLoading(false);
        setIsLogged(false);
    }

    const refreshAccessToken = async () => {
        try {
            const refresh_token = await AsyncStorage.getItem('refresh_token', refresh)
            const response = axios.post('http://192.168.1.92:8000/api/token/refresh/', {
                refresh: refresh_token,
            })
            const { access } = (await response).data;
            setToken(access);
            setIsLogged(true);
            return access;
        }
        catch(error) {
            console.log(error)
            throw error;
        }
    }
    // Copied from somewhere... need to understand this.
    /* 
    So this basically allows us to intercept specific responses for and intercept these responses from our backend and create a suitable response for a response from our 
    backend.

    The axios.interceptors.response.use takes two parameters, one parameter is a function that handles a normal response from the backend. So for example typical status code 200's
    which are successful responses. The second parameter handles errors and this allows us to perform specific responses for specific backend error responses. 
    */
        axios.interceptors.response.use((response) => response,
        async (error) => {
            /* When we make a request using Axios, it generates like a config file with all the necessary data about a request such as the header, the URL etcetera.
            If an error occurs during the request, this config object is accessible through the error object. The _retry prevents infinite retry loops since it acts as a flag
            to indicate whether a retry has already occured.*/
            const originalRequest = error.config;

            // Check if the error is due to expired token (401 Unauthorized)
            if (error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;

                try {
                    const access_token = await refreshAccessToken();
                    originalRequest.headers.Authorization = `Bearer ${access_token}`;
                    return axios(originalRequest); // Retry original request with new token
                } catch (refreshError) {
                    // Handle token refresh error (e.g., logout user, redirect to login page)
                    console.error('Token refresh failed:', refreshError);
                    // Example: logoutUser();
                }
            }

            return Promise.reject(error); // Propagate error if not due to token expiration
        }
    );


    return (
        <AuthContext.Provider value = {{user, token, loading, signIn, signOut, isLogged,refreshAccessToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };


