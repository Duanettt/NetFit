import { View, Text, Image, StatusBar } from 'react-native'
import { Tabs, Redirect} from 'expo-router';
import { AuthContext } from '../../components/AuthContext';
import { icons } from "../../constants";
import { useContext } from 'react';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-jbold" : "font-jregular"} text-xs`}
        style={{ color: 'white' }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  const { loading, isLogged } = useContext(AuthContext);

  if (!loading && !isLogged) return <Redirect href="/sign-in" />;

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#76ABAE",
          tabBarInactiveTintColor: 'white',
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#151515",
            borderTopWidth: 1,
            borderTopColor: "#191919",
            height: 104,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
            <Tabs.Screen
              name="upload"
              options={{
                title: "Upload",
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                  <TabIcon
                  icon={icons.plus}
                  color={color}
                  name="Upload"
                  focused={focused}
                  />
                ),
              }}
            />
          <Tabs.Screen
            name="workouts"
            options={{
              title: "Workouts",
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={icons.profile}
                  color={color}
                  name="Workouts"
                  focused={focused}
                />
              ),
            }}
          />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              name="Profile"
              focused={focused}
            />
          ),
        }}
      />
      </Tabs>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default TabLayout;