import { Image, View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';

import { Link } from 'expo-router'

const axios = require('axios').default;

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = () =>
    {
      setIsSubmitting(true);

      axios.post('http://192.168.1.92:8000/api/register/', {
        email: form.email,
        username: form.username,
        password: form.password,
      })
      .then(function (response) {
        console.log(response);
        console.log('posted')
        setIsSubmitting(false);
      })
      .catch(function (error) {
        console.log(error);
        setIsSubmitting(false);
      });
    }


  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className = "w-full justify-center min-h-[78vh] px-4 my-6">
          <Text className= "text-2xl text-white-100 text-semibold mt-10 font-psemibold">Sign Up to <Text className="text-blue font-jbold text-3xl">NETFIT</Text></Text>

          <FormField
          title="Username"
          value={form.username}
          handleChangeText={(e) => setForm({...form, username: e})}
          otherStyles="mt-10"
          />
          <FormField
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({...form, email: e})}
          otherStyles="mt-7"
          keyboardType="email-address"
          />
          <FormField
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({...form, password: e})}
          otherStyles="mt-7"
          />

          <CustomButton 
          title="Sign Up"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
          color="bg-secondary"
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">Have an account already?</Text> 
            <Link href="/sign-in" className="text-lg font-psemibold text-secondary">Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp