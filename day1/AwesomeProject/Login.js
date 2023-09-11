
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Image } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigation=useNavigation()
  const handleLogin = () => {
    navigation.navigate('Welcome')
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <ImageBackground
      source={require('./assets/bg.jpg')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
          <View style={styles.formContainer}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            underlineColorAndroid="transparent"
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            style={styles.input}
          />

          <Button mode="contained" onPress={handleLogin} style={styles.button}>
            Login
          </Button>

          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    width:'100%'

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#fff', 
  },
  formContainer: {
    width: '80%',
    marginTop: 24,
  },
  input: {
   borderRadius:10,
    marginBottom: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
  
  },
  button: {
    marginTop: 16,
    backgroundColor: '#007AFF',
  },
  forgotPassword: {
    textAlign: 'center',
    marginTop: 16,
    color: '#fff',
  },
});

export default LoginPage;
