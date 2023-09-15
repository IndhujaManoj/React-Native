import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
const Home = () => {
  return (
    <View style={style.container}>
    <Text>Home</Text>
    <Button title='Click Me'
    onPress={()=>Alert('Button Clicked!!')}/>
  </View>
  )
}
const style=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'orange'
  }
})
export default Home;