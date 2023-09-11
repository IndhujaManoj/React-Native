// MainContent.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen= ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Main Content</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

export default HomeScreen;
