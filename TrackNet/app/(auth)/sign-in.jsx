import { Image, View, Text, ScrollView } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';
import { AuthContext } from '../../components/AuthContext';

const SignIn = () => {

  /* Utilising routers to navigate to different areas. Add more comments. */
  const router = useRouter();

  const { signIn, isLoading, isLogged } = useContext(AuthContext);
  const [form, setForm] = useState({ username: '', password: '' });

  useEffect(() => {
    console.log(isLogged)
    if (isLogged) {
      router.push('/home');
    }
  }, [isLogged]);

  const submit = async () => {
    await signIn(form.username, form.password);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[83vh] px-4 my-6">
          <Text className="text-3xl text-white-100 font-jregular mt-10">Log In</Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isLoading}
            color="bg-secondary"
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray font-jthin">Don't have an account?</Text>
            <Link href="/sign-up" className="text-lg font-jbold underline text-white-100">Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
