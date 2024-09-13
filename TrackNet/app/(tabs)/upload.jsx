import { View, Text, ScrollView, Image } from 'react-native'
import React, { createContext, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthContext } from '../../components/AuthContext'

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import { images } from '../../constants'
import Pad from '../../components/Pad'

const upload = () => {
  const { user } = useContext(AuthContext)

  const imagePress = async () => {
    try {
      const result = await launchImageLibrary({
        quality: 1,
      })
      if(!result.didCancel && result.assets)
      {
        // axios post to our urls on the backend.
        console.log('Photo selected')
      }
    }
    catch(error)
    {
      console.log('Error loading image:', error)
    }
  }
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView>
        <View className="flex-row mt-6 items-center p-4">
          <Pad title="Upload your workouts now" handlePress={imagePress} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default upload
