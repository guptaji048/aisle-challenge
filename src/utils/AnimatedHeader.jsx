import React from 'react';
import { Animated, View, Text, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HEADER_HEIGHT = Dimensions.get('window').height * 0.2;

const AnimatedHeader = ({ animatedValue, title }) => {
  const insets = useSafeAreaInsets();
  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [HEADER_HEIGHT + insets.top, insets.top + 44],
    extrapolate: 'clamp'
  });
  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        height: headerHeight,
        backgroundColor: 'white',
        color: 'black'
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
        <Text style={{ fontFamily: 'GilroyBold', fontSize: 26 }}>{title}</Text>
      </View>
    </Animated.View>
  );
};

export default AnimatedHeader;