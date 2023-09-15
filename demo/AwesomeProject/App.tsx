import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Pages/Home';
import Screen from './Pages/Screen';
import Buttons from './Component/Button';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Buttons">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Screen" component={Screen} />
        <Stack.Screen name="Buttons" component={Buttons} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
