// DrawerContent.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const SettingsScreen= ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Drawer Content</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

export default SettingsScreen;
