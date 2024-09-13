import React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView, Dimensions, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import CustomButton from '../components/CustomButton';

import images from '../constants/images'
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

const Index = () => {
  return (
    <Swiper loop={false}>
      <View className="flex-1 h-full bg-primary">
        <ImageBackground className="h-3/4" source={images.athlete}>
          <SafeAreaView className="flex-1">
              <View className="top-3/4 mt-10 items-center justify-center">
                <Text className="text-white-100 text-2xl w-[90vw] font-jthin text-center">Begin your journey with {''}
                    <Text className="text-3xl text-blue font-jbold">NETFIT</Text>
                  </Text>
              </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
      <View className="flex-1 h-full bg-primary">
        <ImageBackground className="h-3/4" source={images.boxing}>
          <SafeAreaView className="flex-1">
              <View className="top-3/4 mt-10 items-center justify-center">
                <Text className="text-white-100 text-2xl w-[100vw] font-jthin text-center">Upload your own workouts and {''}
                    <Text className="text-3xl text-blue font-jbold">and keep ACTIVE</Text>
                  </Text>
              </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
      <View className="flex-1 h-full bg-primary">
        <ImageBackground className="h-3/4" source={images.workingout}>
          <SafeAreaView className="flex-1">
              <View className="top-3/4 mt-10 items-center justify-center">
                  <Text className="text-white-100 text-2xl w-[80vw] font-jthin text-center">Start your journey and {''}
                      <Text className="text-3xl font-jregular">LEVEL UP</Text>
                  </Text>

                  <CustomButton 
                  title="Start now!"
                  color="bg-blue"
                  containerStyles="mt-3 p-7"
                  handlePress={() => router.push("/onboard")}
                   />
              </View>
          </SafeAreaView>
        </ImageBackground>
      </View>


    </Swiper>
  )
}

export default Index
