import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions, Text, StyleSheet, TextInput, View,
} from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { UserDataContext } from '../contexts/UserDataContext';

const styles = StyleSheet.create({
  textInput: {
    fontSize: 17,
    borderWidth: 1,
    padding: 6,
    borderRadius: 7,
    borderColor: '#e1e1e1',
    fontFamily: 'GilroySemiBold',
    fontWeight: 'normal',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 7,
    width: Dimensions.get('window').width * 0.32,
    backgroundColor: '#f9cb10',
    borderRadius: 25,
  }
});

function OtpInputForm({ otpNumber, setOtpNumber, phoneNumber, setOtpSent, navigation }) {

  const { setUserToken } = useContext(UserDataContext);
  const [timerCount, setTimer] = useState(60);

  const handleClick = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Cookie': '__cfduid=df9b865983bd04a5de2cf5017994bbbc71618565720' },
      body: JSON.stringify({ number: '+91' + phoneNumber, otp: otpNumber })
    };
    fetch('https://testa2.aisle.co/V1/users/verify_otp', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          setUserToken(data.token);
          navigation.push('Home');
          setOtpNumber(null);
          setOtpSent(false);
        }
      }).catch((err) => {
        console.log(err);
      })
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (timerCount !== 0) {
        setTimer(lastTimerCount => {
          lastTimerCount <= 1 && clearInterval(interval)
          return lastTimerCount - 1
        })
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [timerCount]);

  return (
    <React.Fragment>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'GilroySemiBold', fontSize: 18, paddingBottom: 8 }}>+91 {phoneNumber}</Text>
        <IconButton
          icon="pencil"
          size={16}
          style={{ marginBottom: 10 }}
          onPress={() => setOtpSent(false)}
        />
      </View>
      <Text style={{ fontFamily: 'GilroyBold', fontSize: 42, paddingBottom: 12 }}>Enter The {"\n"}OTP</Text>
      <TextInput
        value={otpNumber}
        onChangeText={(e) => setOtpNumber(e)}
        keyboardType="number-pad"
        textAlign="center"
        style={[styles.textInput, { width: Dimensions.get('window').width * 0.35 }]}
        fontFamily="GilroySemiBold"
        error
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Button
          mode="contained"
          style={styles.button}
          onPress={(e) => handleClick(e)}
        >
          <Text style={{ fontFamily: 'GilroySemiBold', fontSize: 17, color: 'black', textTransform: 'none' }}>Continue</Text>
        </Button>
        {timerCount === 0 ?
          (
            <Button onPress={() => setTimer(60)}>
              <Text style={{ fontFamily: 'GilroySemiBold', fontSize: 16, color: '#f9cb10', textTransform: 'none' }}>Send Again</Text>
            </Button>
          )
          :
          (
            <Text style={{ fontFamily: 'GilroySemiBold', fontSize: 18, paddingLeft: 12 }}>
              {timerCount < 10 ? `00:0${timerCount}` : `00:${timerCount}`}
            </Text>
          )
        }
      </View>
    </React.Fragment>
  )
}

OtpInputForm.propTypes = {
  otpNumber: PropTypes.number.isRequired,
  setOtpNumber: PropTypes.func.isRequired,
  phoneNumber: PropTypes.number.isRequired,
  setOtpSent: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
}

export default OtpInputForm;
