// CustomDrawerContent.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the desired icon library

const CustomDrawerContent = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.closeDrawer()}>
        <Icon name="bars" size={30} />
      </TouchableOpacity>
      <Text>Drawer Content</Text>
    </View>
  );
};

export default CustomDrawerContent;
