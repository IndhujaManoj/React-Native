import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import React from 'react'

export default function Find() {
  return (
    <View style={style.container}>
    <Text>Find</Text>
    <Button title='Click Me'
    onPress={()=>Alert('Button Clicked!!')}/>
  </View>
  )}
  const style=StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'orange'
    }
})