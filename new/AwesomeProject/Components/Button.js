import React from 'react'
import {
    Alert,
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
export const Button = () => {
    const press=()=>{
        console.log('hi')
      }
      const onPressDouble=()=>{
        Alert.alert(
          'Hey There!',
          'Two Button Alert Dialoge Box',
          [{text:'yes',onPress:()=>console.log('Yes Button Clicked')},
          { text: 'No', onPress: () => console.log('No Button Clicked'), style: 'cancel' }
    
        ],{
          cancelable:true
        }
        )
      }
      const onPressTriple=()=>{
        Alert.alert(
          'Hey There','Three Button alert box',
          [
            
            {text:'Ask me later',onPress:()=>console.log('Later clicked')},
            {text:'yes',onPress:()=>console.log('Yes Button Clicked')},
            {text:'No',onPress:()=>console.log('No Button Clicked'),style: 'cancel',},
    
    ]
        )
      }
      const onPressSingle=()=>{
        Alert.alert('hi i am iindhus')
      }
    
  return (
    <SafeAreaView >
    
         <Text style={styles.sectionTitle} onPress={press}>Hi I am Indhuja</Text>
         <View style={styles.sectionContainer}>
         <Text >Hi</Text>

         </View>
         <View style={styles.button}>
          <Button
  onPress={onPressSingle}
  title="Single Alert"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
<Button
  onPress={onPressDouble}
  title="Double"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
<Button
  onPress={onPressTriple}
  title="Tripple"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
         </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor:'gray',
height:'60%'

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign:'center',
    backgroundColor:'pink',
    padding:30

  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  cancel:{
    color:'red'
  },
  button:{
    marginTop: 22,

  }
});

export default App;



