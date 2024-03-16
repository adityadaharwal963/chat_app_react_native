import { View, Text, Image, TextInput, Touchable, TouchableOpacity, Pressable } from 'react-native'
import React, { useRef } from 'react'
import { StatusBar } from 'expo-status-bar'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SignIn() {

  const router = useRouter();
  //https://react.dev/reference/react/useRef
  const email = useRef("");
  return (
    <View className="flex-1">

      <StatusBar style="dark" />
      {/* https://docs.expo.dev/versions/latest/sdk/status-bar/ */}
      <View className="flex-1 gap-10" style={{ paddingTop: heightPercentageToDP(8), paddingHorizontal: widthPercentageToDP(5) }}>
            {/*SignIn images*/}

            <View className="items-center">
              <Image style={{ height: heightPercentageToDP(25) }} resizeMode='contain' source={require('../assets/images/login.png')} />
            </View>

            <View className='gap-y-8' >
              <Text style={{ fontSize: heightPercentageToDP(4) }} className="font-bold text-center tracking-wider text-neutral-800">SignIn</Text>
              {/* form input */}

              <View className="gap-4">
                    <View style={{ height: heightPercentageToDP(7) }} className="flex-row  px-4  gap-x-4 bg-neutral-100  rounded-xl items-center  ">
                        <Octicons name='mail' size={heightPercentageToDP(2.7)} color="gray" />
                        <TextInput
                          style={{ fontSize: heightPercentageToDP(2) }}
                          className="flex-1 font-semibold text-neutral-700"
                          placeholder='Email address'
                          placeholderTextColor={'gray'}
                        />
                </View>

                <View className="gap-y-3 gap-x-0">
                      <View style={{ height: heightPercentageToDP(7) }} className="flex-row  px-4  gap-x-4 bg-neutral-100  rounded-xl items-center  ">
                          <Octicons name='lock' size={heightPercentageToDP(2.7)} color="gray" />
                          <TextInput
                            style={{ fontSize: heightPercentageToDP(2) }}
                            className="flex-1 font-semibold text-neutral-700"
                            placeholder='Password'
                            placeholderTextColor={'gray'}
                          />
                      </View>
                    <Text style={{fontSize:heightPercentageToDP(1.8)}} className="font-semibold text-right text-neutral-600">Forgot Password?</Text>
                </View>
                {/* submit button*/}
                <TouchableOpacity 
                style={{height:heightPercentageToDP(6.5)}}
                className="bg-indigo-500 rounded-xl items-center justify-center">
                      <Text 
                      style={{fontSize: heightPercentageToDP(2.7)}}
                      className="text-white font-bold tracking-wider "
                      >
                        SignIn
                      </Text>
                </TouchableOpacity>
                {/* sign up text */}
              <View className="flex-row justify-center">
                  <Text style = {{fontSize:heightPercentageToDP(1.8)}} className="font-semibold text-neutral-500">Don't have an account? </Text>
                  <Pressable onPress={() => router.push('signUp')}>
                     <Text style = {{fontSize:heightPercentageToDP(1.8)}} className="font-bold text-indigo-500">Sign Up</Text>
                  </Pressable>
              </View>
                </View>
              </View>
        </View>

      </View>
      )
}