import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, color , handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity
    onPress = {handlePress}
    activeOpacity = {0.7}
        className={`${color} p-[20] rounded-2xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
        disabled={isLoading}
    >
        <Text className={`text-white-100 font-jregular text-xl ${textStyles}`}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton