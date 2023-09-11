import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert, StyleSheet } from 'react-native'
import { ImageBackground } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Button } from 'react-native-paper'
const Welcome = () => {
  const [myToken, setMytoken] = useState('Click Button To Generate Token')
  const navigation=useNavigation()

  const generateRandomToken = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let token = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters[randomIndex];
    }
    return token;
  };


  const handleToken = async () => {
    const randomToken = generateRandomToken(32)
    Alert.alert('Success', 'Token Generated Successfully')
    setMytoken(randomToken)
    console.log(randomToken)
  };

  function handleNext(){
    navigation.navigate('Drawer')


  }
  return (
    <ImageBackground
      source={require('./assets/bg.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.6}>
          <View style={styles.generateButton}>
            <Text style={styles.buttonText} onPress={handleToken}
>Generate Token</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.div}>
          <Text style={styles.text}>{myToken}</Text>

        </View >
        <View>
        <TouchableOpacity
          // onPress={handleToken}
          activeOpacity={0.6}
          style={styles.backButton}>

          <View style={styles.backDiv}>
            <Text style={styles.back} onPress={handleNext}>Next</Text>
          </View>
        </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>


  )
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%'

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
  div: {
    marginTop: 100,
    width: "80%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgb(197,194,179)',


  },
  backButton:{
    marginTop:300,
    marginLeft:250
  },
back:{
  color: 'white',
  fontSize: 16,
},
backDiv:{
  backgroundColor: 'rgb(247,80,71)', 
  padding: 20,
  borderRadius: 5,

},
  generateButton: {
    backgroundColor: 'rgb(0,124,0)',
    margin: 10,
    padding: 20,
    borderRadius: 5,
  
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    padding: 20,
    color: 'white',
    marginTop:20

  }

})

export default Welcome
