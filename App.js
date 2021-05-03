import React from 'react';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useFonts } from 'expo-font';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import DiscoverScreen from './src/screens/DiscoverScreen';
import NotesScreen from './src/screens/NotesScreen';
import MatchesScreen from './src/screens/MatchesScreen';
import ProfileScreen from './src/screens/ProfileScreen';

export default function App() {
  const [loaded] = useFonts({
    GilroyRegular: require('./assets/fonts/Gilroy-Regular.ttf'),
    GilroySemiBold: require('./assets/fonts/Gilroy-SemiBold.ttf'),
    GilroyBold: require('./assets/fonts/Gilroy-ExtraBold.otf'),
  });
  const Stack = createStackNavigator();
  const Tab = createMaterialBottomTabNavigator();

  function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Discover';

    switch (routeName) {
      case 'Discover': {
        return 'Discover';
      }
      case 'Notes': {
        return 'Notes';
      }
      case 'Matches': {
        return 'Matches';
      }
      case 'Profile': {
        return 'Profile';
      }
      default: {
        return 'Model & Color';
      }
    }
  }

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
          }}
        />
        <Tab.Screen
          name="Notes"
          component={NotesScreen}
          options={{
            tabBarLabel: <Text style={{ fontFamily: 'GilroyRegular' }}>Notes</Text>,
          }}
        />
        <Tab.Screen
          name="Matches"
          component={MatchesScreen}
          options={{
            tabBarLabel: <Text style={{ fontFamily: 'GilroyRegular' }}>Matches</Text>,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: <Text style={{ fontFamily: 'GilroyRegular' }}>Profile</Text>,
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {loaded && (
          <Stack.Navigator initialRouteName="On Boarding">
            <Stack.Screen name="On Boarding" component={OnBoardingScreen} options={{ headerShown: false }} />
            <Stack.Screen
              name="Home"
              component={Home}
              options={({ route }) => ({
                headerTitle: getHeaderTitle(route),
                headerLeft: null,
                headerTitleStyle: {
                  fontFamily: 'GilroySemiBold',
                },
              })}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
