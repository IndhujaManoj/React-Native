import React, { useRef, useEffect } from 'react';
import { View, FlatList, Image, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';

const data = [
  {
    id: '1',
    image: require('../Images/chats.png'),
    phoneNumber: '123-456-7890',
  },
  {
    id: '2',
    image: require('../Images/post.png'),
    phoneNumber: '987-654-3210',
  },
  {
    id: '3',
    image: require('../Images/profile.jpeg'),
    phoneNumber: '987-654-3210',
  },
  {
    id: '4',
    image: require('../Images/find.png'),
    phoneNumber: '987-654-3210',
  },                                    
  {
    id: '5',
    image: require('../Images/settings.png'),
    phoneNumber: '987-654-3210',
  },
  {
    id: '6',
    image: require('../Images/chat.png'),
    phoneNumber: '987-654-3210',
  },
];

const AnimatedFlatList = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const renderItem = ({ item }) => (
    <Animated.View style={{ ...styles.itemContainer, opacity: fadeAnim }}>
      <TouchableOpacity>
        <Image source={item.image} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.phoneNumber}>{item.phoneNumber}</Text>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,

  },
  flatList: {
    paddingVertical: 16,

  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'rgb(255,172,28)',

  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 16,
  },
  phoneNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AnimatedFlatList;
