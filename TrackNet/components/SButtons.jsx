import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const SButtons = ({ title, color , handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity
    onPress = {handlePress}
    activeOpacity = {0.7}
        className={`bg-black-100 p-[15] rounded-3xl justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
        disabled={isLoading}
    >
        <Text className={`text-white-100 font-jthin text-sm ${textStyles}`}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default SButtons