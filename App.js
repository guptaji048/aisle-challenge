import React from 'react';
import { Text, Image, View } from 'react-native';
import { Badge } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useFonts } from 'expo-font';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import DiscoverScreen from './src/screens/DiscoverScreen';
import NotesScreen from './src/screens/NotesScreen';
import MatchesScreen from './src/screens/MatchesScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { UserDataProvider } from './src/contexts/UserDataContext';

export default function App() {
  const [loaded] = useFonts({
    GilroyRegular: require('./assets/fonts/Gilroy-Regular.ttf'),
    GilroySemiBold: require('./assets/fonts/Gilroy-SemiBold.ttf'),
    GilroyBold: require('./assets/fonts/Gilroy-ExtraBold.otf'),
  });
  const Stack = createStackNavigator();
  const Tab = createMaterialBottomTabNavigator();

  function Home() {
    return (
      <Tab.Navigator
        initialRouteName="Discover"
        activeColor="black"
        shifting={false}
        barStyle={{ backgroundColor: 'white' }}
      >
        <Tab.Screen
          name="Discover"
          component={DiscoverScreen}
          options={{
            tabBarLabel: <Text style={{ fontFamily: 'GilroyRegular' }}>Discover</Text>,
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./assets/discover-1.png')}
                style={{ tintColor: color }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notes"
          component={NotesScreen}
          options={{
            tabBarLabel: <Text style={{ fontFamily: 'GilroyRegular' }}>Notes</Text>,
            tabBarIcon: ({ color }) => (
              <View>
                <Image
                  source={require('./assets/notes-1.png')}
                  style={{ tintColor: color }}
                />
                <Badge style={{ position: 'absolute', top: -7, right: -10, backgroundColor: '#8c5cfb' }} size={15}>
                  <Text style={{ fontFamily: 'GilroyBold' }}>2</Text>
                </Badge>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Matches"
          component={MatchesScreen}
          options={{
            tabBarLabel: <Text style={{ fontFamily: 'GilroyRegular' }}>Matches</Text>,
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./assets/matches-1.png')}
                style={{ tintColor: color }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: <Text style={{ fontFamily: 'GilroyRegular' }}>Profile</Text>,
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./assets/profile-1.png')}
                style={{ tintColor: color }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <SafeAreaProvider>
      <UserDataProvider>
        <NavigationContainer>
          {loaded && (
            <Stack.Navigator initialRouteName="On Boarding">
              <Stack.Screen name="On Boarding" component={OnBoardingScreen} options={{ headerShown: false }} />
              <Stack.Screen
                name="Home"
                component={Home}
                options={() => ({
                  headerShown: false
                })}
              />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </UserDataProvider>
    </SafeAreaProvider>
  );
}
