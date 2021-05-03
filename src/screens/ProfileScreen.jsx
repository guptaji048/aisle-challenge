import React from 'react';
import {
  View, Dimensions, Text, StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function ProfileScreen() {
  return (
    <View style={styles}>
      <Text>ProfileScreen</Text>
    </View>
  )
}

export default ProfileScreen;
