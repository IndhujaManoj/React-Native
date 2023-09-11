import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import InputTextField from './Components/InputTextField';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.imgView}>
          <Image source={require('./assets/u.png')} style={[styles.img,{height:150,width:150,}]} />
          <Text style={[styles.text,{marginTop:20,fontSize:22,fontWeight:'500',}]}>Varmo</Text>
        </View>
        <View style={styles.fbView}>
          <TouchableOpacity>
            <View style={styles.socialButton}>
              <Image source={require('./assets/fb.png')} style={styles.socialLogo} />
              <Text>Face Book</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.socialButton}>
            <Image source={require('./assets/google.png')} style={styles.socialLogo} />
            <Text>Google</Text>
            </View>
          </TouchableOpacity>
        </View>
          <Text style={[styles.text,{color:'#ABB4BD',fontSize:15,textAlign:'center',marginVertical:20}]}>or</Text>
          <InputTextField tittle="email"></InputTextField>
          <InputTextField tittle="password"></InputTextField>


          <Text style={[styles.text,styles.link,{textAlign:'right'}]}>Forgot Password?</Text>
          <TouchableOpacity style={styles.submitContainer}>
            <Text style={[styles.text,{color:'#fff',fontWeight:'600',fontSize:16}]}>Login</Text>
          </TouchableOpacity>
          <Text style={[styles.text,{fontSize:14,color:'#ABB4BD',textAlign:'center',marginTop:24}]}>Don't Have An Account? 
          <Text style={[styles.text,styles.link]}>Register Now</Text></Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
 container:{
    flex:1,
    backgroundColor:"#fff",
    paddingHorizontal:30,
 },
  socialLogo: {
    width: 16,
     height: 16,
     marginRight:8
  },
  imgView:{
    marginTop:60,
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    fontFamily:'Avenir Next',
    color:'#1D2029'
  },
  fbView:{
    marginTop:48,
    flexDirection:'row',
    justifyContent:'center'
  },
  socialButton:{
    flexDirection:'row',
    marginHorizontal:12,
    paddingVertical:12,
    paddingHorizontal:30,
    borderWidth:StyleSheet.hairlineWidth,
    borderColor:"rgba(171,180,189,8.65)",
    borderRadius:4,
    backgroundColor:"#fff",
    shadowColor:"rgba(171, 180 ,189, 0.35)",
    shadowOffset:{width:0,height:10},
    shadowOpacity:1,
    shadowRadius:20,
    elevation:5
  },
  link:{
    color:'#FF1654',
    fontSize:14,
    fontWeight:'500'
  },
  submitContainer:{
    backgroundColor:"#FF1654",
    fontSize:16,
    borderRadius:4,
    paddingVertical:12,
    marginTop:32,
    alignItems:'center',
    shadowColor:"rgba(255 ,22, 84,8.24)",
    shadowOffset:{width:0,height:9},
    shadowOpacity:1,
    shadowRadius:20
  }


});
