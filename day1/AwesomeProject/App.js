import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './Welcome';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './Login';
import Drawer from './Drawer';
const Stack=createStackNavigator()

export default function App() {
  return (
   
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'
      screenOptions={{ headerShown: false }}
      
      >
      <Stack.Screen
       name="Logijonnn" 
       component={LoginPage} />
      <Stack.Screen
       name="Welcome" 
       component={Welcome} />

      <Stack.Screen
       name="Drawer" 
       component={Drawer} />


      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
