// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

// export default function App() {
//   const [count, setCount] = useState(0)
//   const [name,setName]=useState('')
//   const [displayval,setDisplay]=useState('none')
//   function handlePress() {
//     console.log('Text is Pressed')
//   }
//   function handleCount() {
//     setCount(count + 1)
//   }
//   function nameShow(){
//       console.log(name,"my name is")
//   setDisplay('flex')
//   }
 
  
//   return (
//     <View style={styles.main}>
//       <View style={{ paddingLeft: 10 }}>
//         <Text style={styles.color}>Indhuja</Text>
//         <TextInput
//           placeholder='Type'
//           style={styles.textinput} />
//         <Button title='hello' />
//       </View>
//       <View><Text numberOfLines={3} onPress={handlePress}>Used to truncate the text with an ellipsis after computing the text layout,
//         including line wrapping, such that the total number of lines does not exceed this number.</Text>
//       </View>
//       {/* <Image source={require('./assets/icon.png')}></Image> */}
//       <Image source={{
//         uri: 'https://picsum.photos/seed/picsum/200/300',
//         width: 300,
//         height: 400
//       }}></Image>
//       <Button title='PRESS' onPress={handleCount} />
//       <Text>{count}</Text>
//       <TextInput style={styles.textinput}
//           placeholder='name'

//           onChangeText={(value)=>setName(value)}

//       />
//       <Button title='My name is' onPress={nameShow}/>
// <Text 
// style={{display:displayval}}
// >hi</Text>      
//     </View>
  
//   )}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   color: {
//     color: 'red'
//   },
//   main: {
//     padding: 50,
//   },
//   textinput: {
//     height: 40,
//     borderColor: 'blue',
//     borderWidth: 1
//   },
//   longText: {

//   }


// });
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image,TouchableWithoutFeedback } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [displayval, setDisplay] = useState('none')

  function handlePress() {
    console.log('Text is Pressed')
  }

  function handleCount() {
    setCount(count + 1)
  }

  function nameShow() {
    console.log(name, "my name is")
    setDisplay('flex')
  }

  return (
    <View style={styles.main}>
      <View style={{ paddingLeft: 10 }}>
        <Text style={styles.color}>Indhuja</Text>
        <TextInput
          placeholder='Type'
          style={styles.textinput}
        />
        <Button title='hello' />
      </View>
      <View>
        <Text numberOfLines={3} onPress={handlePress}>
          Used to truncate the text with an ellipsis after computing the text layout,
          including line wrapping, such that the total number of lines does not exceed this number.
        </Text>
      </View>
      <TouchableWithoutFeedback onPress={()=>console.log('Image Tapped')}>
      <Image
        source={{
          uri: 'https://picsum.photos/seed/picsum/200/300',
          width: 300,
          height: 400,
        }}
      />
      </TouchableWithoutFeedback>
     
      <Button title='PRESS' onPress={handleCount} />
      <Text>{count}</Text>
      <TextInput
        style={styles.textinput}
        placeholder='name'
        onChangeText={(value) => setName(value)}
      />
      <Button title='My name is' onPress={nameShow} />
      <Text style={{ display: displayval }}>hi {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  color: {
    color: 'red',
   },
  main: {
    padding: 50,
  },
  textinput: {
    height: 40,
    borderColor: 'blue',
    borderWidth: 1,
  },
  longText: {},
});
