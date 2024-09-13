import { View, Text, ScrollView, Image } from 'react-native'
import React, { createContext, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthContext } from '../../components/AuthContext'

import { images } from '../../constants'

const profile = () => {
  const { user } = useContext(AuthContext)

  console.log(user.username);


  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView>
        <View className="flex-row mt-6 items-center p-4">
          <Image className="w-24 h-24 mr-3 rounded-full"source= {images.default_profile}/>
          <View className="flex flex-col">
            <Text className="text-base text-customGray font-jthin">Welcome back!
            </Text>
            <Text className="text-lg text-white-100 font-jbold">Hello, {user.username}!</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default profile
