
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import React from 'react';
import 'nativewind';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import { Link, router } from 'expo-router';

const image = require('../assets/images/background.jpeg');

const Index = () => {
  return (
  <ImageBackground source={image} className="flex-1 justify-center items-center">
      <LinearGradient className="absolute top-0 bottom-0 left-0 right-0" colors={["transparent", "black"]}>
      <SafeAreaView className="h-full">
        <ScrollView contentContainerStyle={{
          height: "100%",
        }}>
        <View className="justify-center items-center mt-7">
          <Text className="text-white-100 font-jbold text-5xl mt-2">NetFit</Text>
          <Text className="text-white-100 font-jthin text-3xl mt-2">Lets 
            Level{ ' ' }
            <Text className="text-blue font-jregular">UP!</Text>
            </Text>
        </View>


        <View className="w-full flex justify-center items-center min-h-[125vh] px-4">
          <CustomButton title="START LEVELLING UP" handlePress={() => router.push('/sign-in')} containerStyles="w-full mt-7" 
          color="bg-primary"
           />
          <View className="mt-4">
          <Text className="text-lg text-secondary font-jregular">Don't have an account? { ' ' }
          <Link href="/sign-up" className="text-lg font-jregular underline text-white-100">Sign Up</Link>
          </Text> 
          </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  </ImageBackground>
  );
};

export default Index;