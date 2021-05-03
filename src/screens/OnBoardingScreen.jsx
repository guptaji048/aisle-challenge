import React from 'react';
import {
  View, Dimensions, Text, StyleSheet
} from 'react-native';
import { Button } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function OnBoardingScreen({ navigation }) {

  const handleClick = (e) => {
    e.preventDefault();
    navigation.push('Home');
  }
  return (
    <View style={styles}>
      <Text style={{ fontFamily: 'GilroyBold', }}>OnBoardingScreen</Text>
      <Button onPress={(e) => handleClick(e)}>Go</Button>
    </View>
  )
}

export default OnBoardingScreen;
