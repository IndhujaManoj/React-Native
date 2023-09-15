import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  Alert,
  View,
  Text,
} from 'react-native';

const Buttons = () => {
const navigation=useNavigation()
  const onPressDouble = () => {
    Alert.alert(
      'Hey There!',
      'Two Button Alert Dialog Box',
      [
        {
          text: 'Yes',
          onPress: () => {console.log('Yes Button Clicked')
        navigation.navigate('Home')
        },
        },
        {
          text: 'No',
          onPress: () => console.log('No Button Clicked'),
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  const onPressTriple = () => {
    Alert.alert(
      'Hey There',
      'Three Button alert box',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Later clicked'),
        },
        {
          text: 'Yes',
          onPress: () => console.log('Yes Button Clicked'),
        },
        {
          text: 'No',
          onPress: () => console.log('No Button Clicked'),
          style: 'cancel',
        },
      ]
    );
  };

  const onPressNavigate = () => {
    Alert.alert('Single pressed')
    navigation.navigate('Screen');
  };

  return (
    <SafeAreaView>
      <Text style={styles.sectionTitle}>
        Hi, I am Indhuja
      </Text>
      <View style={styles.sectionContainer}>
        <Text>Hi</Text>
      </View>
      <View style={styles.button}>
      {/* <Button
          onPress={onPressNavigate}
          title="Double"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        /> */}
        <Button
          onPress={onPressDouble}
          title="Double"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={onPressTriple}
          title="Triple"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={onPressNavigate}
          title="Navigate"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: 'gray',
    height: '60%',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    backgroundColor: 'pink',
    padding: 30,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  cancel: {
    color: 'red',
  },
  button: {
    marginTop: 32,
  },
});

export default Buttons;
