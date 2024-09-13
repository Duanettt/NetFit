import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { createContext, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../constants";

const ProfilePicture = ({username}) => {
  return (
    <View className="flex-row mt-2 items-center p-4">
        <TouchableOpacity>
            <Image className="w-24 h-24 mr-3 rounded-full"source= {images.default_profile}/>
        </TouchableOpacity>
        <View className="flex flex-col">
            <Text className="text-base text-white-100 font-jthin">Welcome back!
            </Text>
            <Text className="text-lg text-white-100 font-jbold">Hello, {username}!</Text>
        </View>
    </View>
  )
}

export default ProfilePicture