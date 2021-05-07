import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, StyleSheet, ImageBackground,
} from 'react-native';

const styles = StyleSheet.create({
  textContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    alignItems: 'flex-start',
    padding: 15
  }
});

function ImageCard({ imageUrl, mainText, width, height, subText, blurImage }) {
  return (
    <ImageBackground
      source={imageUrl}
      resizeMode='cover'
      style={{ width, height }}
      blurRadius={blurImage ? 0 : 5}
      imageStyle={{ borderRadius: 12 }}
    >
      <View style={styles.textContainer}>
        <Text style={{ fontFamily: 'GilroyBold', fontSize: 18, color: 'white' }}>{mainText}</Text>
        {subText.length !== 0 && (<Text style={{ fontFamily: 'GilroySemiBold', fontSize: 15, color: 'white' }}>{subText}</Text>)}
      </View>
    </ImageBackground>
  )
};

ImageCard.propTypes = {
  imageUrl: PropTypes.object.isRequired,
  mainText: PropTypes.string.isRequired,
  subText: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  blurImage: PropTypes.bool,
}

ImageCard.defaultProps = {
  subText: '',
  blurImage: true,
};

export default ImageCard;
