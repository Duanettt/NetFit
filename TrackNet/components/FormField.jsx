import { Image,View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2" ${otherStyles}`}>
      <Text className="text-base text-white-100 font-pmedium">{title}</Text>
      <View className="border-2 border-secondary w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-white-100 items-center flex-row">
        <TextInput  
        className="flex-1 text-white-100 font-pmedium text-base"
        value={value}
        placeholder={placeholder}
        onChangeText={handleChangeText}
        secureTextEntry={title === 'Password' && !showPassword}
        />

        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField