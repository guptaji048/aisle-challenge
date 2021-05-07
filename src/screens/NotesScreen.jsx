import React, { useRef, useContext } from 'react';
import {
  View, Dimensions, Text, StyleSheet, Animated, ScrollView, ImageBackground
} from 'react-native';
import { Button } from 'react-native-paper';
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
  button: {
    paddingVertical: 3,
    width: Dimensions.get('window').width * 0.3,
    backgroundColor: '#f9cb10',
    borderRadius: 25,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  upgradeSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 15
  },
});

function NotesScreen() {
  const offset = useRef(new Animated.Value(0)).current;
  const { userDetails } = useContext(UserDataContext);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
        <AnimatedHeader animatedValue={offset} title="Notes" />
        <ScrollView
          style={{ flex: 1, backgroundColor: 'white' }}
          contentContainerStyle={{
            paddingTop: 100,
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
            <ImageCard
              imageUrl={require('../../assets/photo_1.png')}
              mainText="Meena, 23"
              subText="Tap to review 50+ notes"
              width={Dimensions.get('window').width * 0.95}
              height={Dimensions.get('window').height * 0.6}
            />
          </View>
          <View style={styles.upgradeSection}>
            <View style={{ width: Dimensions.get('window').width * 0.5 }}>
              <Text style={{ fontFamily: 'GilroyBold', fontSize: 20 }}>Interested In You</Text>
              <Text style={{ fontFamily: 'GilroySemiBold', fontSize: 14, color: 'grey' }}>Premium members can view all their likes at once</Text>
            </View>
            <Button
              mode="contained"
              style={styles.button}
            >
              <Text style={{ fontFamily: 'GilroySemiBold', fontSize: 15, color: 'black', textTransform: 'none' }}>Upgrade</Text>
            </Button>
          </View>
          <View style={styles.imageContainer}>
            {userDetails.likes.profiles.map((data, idx) => {
              const image = { uri: data.avatar };
              return (
                <View style={{ marginBottom: 20 }} key={idx}>
                  <ImageCard
                    imageUrl={image}
                    mainText={data.first_name}
                    width={Dimensions.get('window').width * 0.45}
                    height={Dimensions.get('window').height * 0.45}
                    blurImage={userDetails.likes.can_see_profile}
                  />
                </View>
              )
            })
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default NotesScreen;
