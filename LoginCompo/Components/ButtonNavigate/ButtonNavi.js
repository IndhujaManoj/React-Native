import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Screens/Home'
import Find from './Screens/Find'
import Chat from './Screens/Chat'
import Post from './Screens/Post'
import Settings from './Screens/Settings'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faMessage, faPlus, faRocket, faSearch, faWrench } from '@fortawesome/free-solid-svg-icons'
import { faRocketchat } from '@fortawesome/free-brands-svg-icons'
const Tab=createBottomTabNavigator()
const CustomTabBarButton=({children,onPress})=>{
  return(
  <TouchableOpacity onPress={onPress} style={{
    top:-30,
    justifyContent:'center',
    alignItems:'center',
    ...styles.shadow
  }}>
    <View style={{
      width:70,
      height:70,
      borderRadius:35,
      backgroundColor:'#e32f45'
    }}>
      {children}
    </View>
  </TouchableOpacity>
  )
}
const ButtonNavi = () => {


  return (
<Tab.Navigator 
tabBarOptions={{showLabel:false}} 
   
  screenOptions={{
    headerShown:false,
    showLabel:false,
    
    tabBarStyle:{
      position:'absolute',
      bottom:25,
      left:20,
      right:20,
      elevation:0,
      backgroundColor:'#ffffff',
      borderRadius:15,
      height:90,
    
      ...styles.shadow
    }
  }}
>
<Tab.Screen name='Homes' component={Home} options={{
  tabBarIcon: ({focused}) => {
    return (
      <View style={{alignItems:'center',justifyContent:'center',top:10}}>

            <FontAwesomeIcon icon={faHome}  size={25} style={{color:focused ? '#e32f45' : '#748c94'}}/>

                <Text style={{color:focused ? '#e32f45' : '#748c94',fontSize:12}}>Home</Text>

      </View>
      
    );
  }
}}/>

<Tab.Screen name='Chat' component={Chat} options={{
  tabBarIcon: ({focused}) => {
    return (
      <View style={{alignItems:'center',justifyContent:'center',top:10}}>
        {/* <Image source={require('../../Images/chats.png')}
        style={{width:25,height:25, }}/> */}
              <FontAwesomeIcon icon={faMessage} size={25}  style={{color:focused ? '#e32f45' : '#748c94'}}/>

          <Text style={{color:focused ? '#e32f45' : '#748c94',fontSize:12}}>Chat</Text>

      </View>
      
    );
  }
}}/>
<Tab.Screen name='Post' component={Post} 
options={{
    tabBarIcon: ({focused}) => {
      return (
  
        <FontAwesomeIcon icon={faPlus} size={25}  style={{color:focused ? '#fff' : '#ccc'}}/>
        
      );
    },

  tabBarButton:(props)=>{
    return <CustomTabBarButton {...props}/>
        
  }
}}
/>

<Tab.Screen name='Find' component={Find} options={{
  tabBarIcon: ({focused}) => {
    return (
      <View style={{alignItems:'center',justifyContent:'center',top:10}}>

      <FontAwesomeIcon icon={faSearch} size={25}  style={{color:focused ? '#e32f45' : '#748c94'}}/>
          <Text style={{color:focused ? '#e32f45' : '#748c94',fontSize:12}}>Find</Text>

      </View>
      
    );
  }
}}/>



<Tab.Screen name='Settings' component={Settings} options={{
  tabBarIcon: ({focused}) => {
    return (
      <View style={{alignItems:'center',justifyContent:'center',top:10}}>
       
          <FontAwesomeIcon icon={faWrench}   style={{width:25,height:25,color:focused ? '#e32f45' : '#748c94'}} size={25}/>

    <Text style={{color:focused ? '#e32f45' : '#748c94',fontSize:12}}>Settings</Text>
    </View>
    );
  }
}}/>

</Tab.Navigator>

  )
}
const styles=StyleSheet.create({
 shadow:{
  shadowColor:'#7F5DF0',
  shadowOffset:{
    width:0,
    height:10
  },
  shadowOpacity:0.25,
  shadowRadius:3.5,
  elevation:5
 }
})
export default ButtonNavi