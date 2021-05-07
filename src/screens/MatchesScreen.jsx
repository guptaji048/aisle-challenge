import React, { useRef } from 'react';
import {
  StyleSheet, Animated,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import AnimatedHeader from '../utils/AnimatedHeader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function MatchesScreen() {
  const offset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
        <AnimatedHeader animatedValue={offset} title="Matches" />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default MatchesScreen;
