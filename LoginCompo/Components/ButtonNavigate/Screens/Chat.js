import { Button, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export class Chat extends Component {
  render() {
    return (
      <View style={style.container}>
      <Text>Chats</Text>
      <Button title='Click Me'
      onPress={()=>Alert('Button Clicked!!')}/>
    </View>
    )
  }
}
const style=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'orange'
  }
})
export default Chat