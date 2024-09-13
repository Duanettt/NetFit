import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { createContext, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthContext } from '../../components/AuthContext'

import { images } from '../../constants'
import ProfilePicture from '../../components/ProfilePicture'
import SButtons from '../../components/SButtons'
import Pad from '../../components/Pad'

const home = () => {
  const { user } = useContext(AuthContext)

  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView>
        <View className="flex-row items-center ">
          <ProfilePicture username={user.username} />
        </View>
        <View className="flex-row ml-7">
          <SButtons containerStyles="mr-3" title="My Goals"/>
          <SButtons containerStyles="mr-3" title="Schedule"/>
          <SButtons containerStyles="mr-3" title="Workouts"/>
        </View>
        <View className="flex">
          <View className="flex-row mt-5 ml-5">
            <Text className="text-white-100 mr-40 font-jregular text-xl">Your Workouts</Text>
            <Text className="text-blue font-jthin text-xl">See all</Text>
          </View>
          <View>
            <Pad containerStyles="mt-10 m-5" color="bg-black-100" title="Workouts"/>
            <Pad containerStyles="m-5" color="bg-black-100" title="Workouts"/>
          </View>
        </View>
        <View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default home
