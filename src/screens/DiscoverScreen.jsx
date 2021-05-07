import React, { useRef, useContext } from 'react';
import {
  View, Dimensions, Text, StyleSheet, Animated, ScrollView, ImageBackground
} from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import AnimatedHeader from '../utils/AnimatedHeader';
import { UserDataContext } from '../contexts/UserDataContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingVertical: 3,
    width: Dimensions.get('window').width * 0.3,
    backgroundColor: '#f9cb10',
    borderRadius: 25,
  }
});

function DiscoverScreen() {
  const offset = useRef(new Animated.Value(0)).current;
  const { userDetails } = useContext(UserDataContext);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
        <AnimatedHeader animatedValue={offset} title="Discover" />
        <ScrollView
          style={{ flex: 1, backgroundColor: 'white' }}
          contentContainerStyle={{
            // alignItems: 'center',
            paddingTop: 130,
            paddingHorizontal: 10
          }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: offset } } }],
            { useNativeDriver: false }
          )}
        >
          <View style={{ alignItems: 'center' }}>
            <ImageBackground source={require('../../assets/photo_1.png')} resizeMode='cover' style={{ width: Dimensions.get('window').width * 0.85, height: Dimensions.get('window').height * 0.6 }} imageStyle={{ borderRadius: 12, shadowOpacity: 0.8 }}>
              <View style={{ position: 'absolute', left: 0, bottom: 0, alignItems: 'flex-start', padding: 15 }}>
                <Text style={{ fontFamily: 'GilroyBold', fontSize: 24, color: 'white' }}>Meena, 23</Text>
                <Text style={{ fontFamily: 'GilroySemiBold', fontSize: 15, color: 'white' }}>Tap to review 50+ notes</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', margin: 5, padding: 15 }}>
            <View style={{ width: Dimensions.get('window').width * 0.54 }}>
              <Text style={{ fontFamily: 'GilroyBold', fontSize: 20 }}>Interested In You</Text>
              <Text style={{ fontFamily: 'GilroySemiBold', fontSize: 14, color: 'grey' }}>Premium members can view all their likes at once</Text>
            </View>
            <Button
              mode="contained"
              style={styles.button}
              onPress={(e) => handleClick(e)}
            >
              <Text style={{ fontFamily: 'GilroySemiBold', fontSize: 15, color: 'black', textTransform: 'none' }}>Upgrade</Text>
            </Button>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, flexWrap: 'wrap', }}>
            <View style={{ marginBottom: 20 }}>
              <ImageBackground source={require('../../assets/photo_2.png')} resizeMode='cover' style={{ width: Dimensions.get('window').width * 0.4, height: Dimensions.get('window').height * 0.45 }} blurRadius={3} imageStyle={{ borderRadius: 12, }}>
                <View style={{ position: 'absolute', left: 0, bottom: 0, alignItems: 'flex-start', padding: 15 }}>
                  <Text style={{ fontFamily: 'GilroyBold', fontSize: 18, color: 'white' }}>Meena, 23</Text>
                </View>
              </ImageBackground>
            </View>
            <ImageBackground source={require('../../assets/photo_3.png')} resizeMode='cover' style={{ width: Dimensions.get('window').width * 0.4, height: Dimensions.get('window').height * 0.45 }} blurRadius={3} imageStyle={{ borderRadius: 12, shadowOpacity: 0.8 }}>
              <View style={{ position: 'absolute', left: 0, bottom: 0, alignItems: 'flex-start', padding: 15 }}>
                <Text style={{ fontFamily: 'GilroyBold', fontSize: 18, color: 'white' }}>Meena, 23</Text>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default DiscoverScreen;
