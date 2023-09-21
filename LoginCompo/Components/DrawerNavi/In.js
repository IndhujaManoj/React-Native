// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screen/Home';
import Settings from './Screen/Settings';
import Find from '../ButtonNavigate/Screens/Find';
import Logout from './Screen/Logout';
import IndexNavi from './IndexNavi';

const Stack = createStackNavigator();

const In = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IndexNavi">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Find" component={Find} />
        <Stack.Screen name="Logout" component={Logout} />
        <Stack.Screen name="IndexNavi" component={IndexNavi}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default In;
