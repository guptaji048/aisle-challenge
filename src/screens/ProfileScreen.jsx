import React, { useRef, useContext } from 'react';
import {
  StyleSheet, Animated,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import AnimatedHeader from '../utils/AnimatedHeader';
import { UserDataContext } from '../contexts/UserDataContext';
import ImageCard from '../utils/ImageCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function ProfileScreen() {
  const offset = useRef(new Animated.Value(0)).current;
  const { userDetails } = useContext(UserDataContext);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
        <AnimatedHeader animatedValue={offset} title={userDetails.invites.profiles[0].general_information.first_name} />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default ProfileScreen;
