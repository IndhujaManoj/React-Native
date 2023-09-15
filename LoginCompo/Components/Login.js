import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {Checkbox} from 'react-native-paper';
import React from 'react';
function Login() {
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.backButtonContainer}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <Text style={styles.headingStyles}>Back</Text>
        </View>
        <Text style={styles.headingStyles}>Login</Text>
      </View>
    );
  };
  const inputFunction = (title, placeHolder, keyboardType) => {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.placeHolderText}>{title}</Text>
        <TextInput
          placeholder={placeHolder}
          keyboardType={keyboardType}
          placeholderTextColor="rgb(242,143,61)"
          style={styles.textInputStyle}
        />
      </View>
    );
  };
  const loginButton = () => {
    return (
      <TouchableOpacity style={styles.button}>
        <Text style={[styles.headingStyles, {color: 'white'}]}>Login</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      {renderHeader()}
      <View style={styles.maninContainer}>
        <View style={styles.welcomeHeading}>
          <View style={styles.circle}>
            <Image
              source={
                // require("../Images/profile.jpeg")
                {
                  uri: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                }
              }
              style={styles.profile}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.welcomeText}>Welcome!</Text>
        </View>
        {inputFunction('username', 'indhuja@gmail.com', 'default')}
        {inputFunction('password', '............', 'default')}
        <View style={styles.savePass}>
          <Checkbox
            status={'checked'}
            // color='rgeb(250,206,72)'
          />
          <Text style={styles.saveText}>save password</Text>
        </View>
        {loginButton()}
        <View
          style={{
            width: '80%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            alignSelf:'center',
            marginTop:50
          }}>
          <Text style={[styles.saveText,{color:'gray'}]}>don't have an account?</Text>
          <Text style={styles.saveText}>sign up</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(250,206,72)',
    justifyContent: 'space-between',
  },
  headerContainer: {
    width: '100%',
    height: 60,
    marginTop: StatusBar.currentHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  headingStyles: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
    color: 'black',
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maninContainer: {
    width: '100%',
    height: '75%',
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  welcomeHeading: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  profile: {
    width: '100%',
    height: '100%',
  },
  circle: {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 50,
    overflow: 'hidden',
    position: 'absolute',
    top: -50,
  },
  welcomeText: {
    fontWeight: '700',
    fontSize: 26,
    position: 'absolute',
    bottom: 0,
    color: 'black',
  },
  inputContainer: {
    width: '80%',
    height: 60,
    alignSelf: 'center',
    marginTop: 30,
  },
  placeHolderText: {
    color: 'gray',
    fontSize: 16,
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: 'rgb(242,143,61)',
  },
  savePass: {
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row',
    height: 75,
    alignItems: 'center',
  },
  saveText: {
    color: 'rgb(242,143,61)',
  },
  button: {
    width: '80%',
    height: 60,
    backgroundColor: 'rgb(242,143,61)',
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});

export default Login;
