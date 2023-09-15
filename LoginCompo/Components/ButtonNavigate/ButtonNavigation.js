import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import ButtonNavi from './ButtonNavi'

const ButtonNavigation = () => {
  return (
    <NavigationContainer>
        <ButtonNavi/>
    </NavigationContainer>
  )
}

export default ButtonNavigation