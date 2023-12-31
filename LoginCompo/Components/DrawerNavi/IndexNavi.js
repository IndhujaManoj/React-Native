import {View, Text, StyleSheet, Image, TouchableOpacity,Animated} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import profile from '../../Images/profile.jpeg';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars,  faX,faHome,faMessage,faSearch,faRocket,faPowerOff,faCog} from '@fortawesome/free-solid-svg-icons';
import Logout from './Screen/Logout';
import Home from './Screen/Home';
import Chat from './Screen/Chat';
import Find from './Screen/Find';
import Post from './Screen/Post';

const IndexNavi = () => {

  const [currentTab, setCurrentTab] = useState('Home');
  const [showMenu,setShowMenu]=useState(false)
  //Animated Properties
  const offsetValue=useRef(new Animated.Value(0)).current;
  const scaleValue=useRef(new Animated.Value(1)).current;
  const closeButtonOffset=useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{justifyContent: 'flex-start', padding: 15}}>
        <Image source={profile} style={{
            width: 60,
            height: 60,
            borderRadius: 50,
            marginTop: 8,
          }}
        />
        <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 20,
          }}>Indhuja </Text>
        <TouchableOpacity>
          <Text style={{marginTop: 6, color: 'white',}}>View Profile</Text>
        </TouchableOpacity>
        <View style={{flexGrow: 1, marginTop: 50}}>
          
          {TabButton(currentTab, setCurrentTab, 'Home', faHome)}
          {TabButton(currentTab, setCurrentTab, 'Chat', faMessage)}
          {TabButton(currentTab, setCurrentTab, 'Find', faSearch)}
          {TabButton(currentTab, setCurrentTab, 'Post', faRocket)}
        </View>
        <View>{TabButton(currentTab, setCurrentTab, 'LogOut', faPowerOff)}</View>
      </View>
      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: 'white',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius:showMenu ? 15 :0,
          transform:[
            {scale:scaleValue},
            {translateX:offsetValue}
          ]
        }}>
       <Animated.View 
       style={{transform:[{
        translateY:closeButtonOffset
       }]}}
       >
       <TouchableOpacity onPress={()=>{
          Animated.timing(scaleValue,{
            toValue:showMenu ? 1: 0.88,
            duration:300,
            useNativeDriver:true,
          })
          .start()
          Animated.timing(offsetValue,{
            toValue:showMenu ? 0: 160,
            duration:300,
            useNativeDriver:true,

          })
          .start()
          Animated.timing(closeButtonOffset,{
            toValue:!showMenu ? -30: 0,
            duration:300,
            useNativeDriver:true,

          })
          .start()
          setShowMenu(!showMenu)
        }}>
          <FontAwesomeIcon
            icon={showMenu ?faX : faBars}
            size={25}
            style={{
              marginTop: 20,
            }}
          />
          
        </TouchableOpacity>

         <View>
  {(() => {
    switch (currentTab) {
      case 'Chat':
        return <Chat />;
      case 'Find':
        return <Find />;
      case 'Post':
        return <Post/>;
      case 'LogOut':
        return <Logout />;
      default:
        return <Home />;
    }
  })()}
</View>

       </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == 'Logout') {
            // navigate('Home')
        } else {
          setCurrentTab(title);
        }
        
       console.log(currentTab)
      }}>
      <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: currentTab == title ? 'white' : 'transparent',
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
        }}>
       
        <FontAwesomeIcon icon={image} size={20} color='white'/>
        <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            paddingLeft: 15,
            color: currentTab == title ? '#5359D1' : 'white',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255,170,51)',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default IndexNavi;
