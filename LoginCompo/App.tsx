import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Components/Login';
import IndexNavi from './Components/DrawerNavi/IndexNavi';
import ButtonNavigation from './Components/ButtonNavigate/ButtonNavigation';
import Header from './Components/Header';
import ScrollViews from './Components/ScrollView';
import FlatLists from './Components/FlatLists';

const Stack = createStackNavigator();

const App = () => {
  return (
   
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={IndexNavi} />
        <Stack.Screen name="BottomNavi" component={ButtonNavigation} />
        <Stack.Screen name="ScrollView" component={ScrollViews} />
        <Stack.Screen name="FlatList" component={FlatLists} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
