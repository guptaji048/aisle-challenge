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

function NotesScreen() {
  return (
    <View style={styles}>
      <Text>NotesScreen</Text>
    </View>
  )
}

export default NotesScreen;
