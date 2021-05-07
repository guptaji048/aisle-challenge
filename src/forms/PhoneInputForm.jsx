import React, { useState } from 'react';
import {
  View, Dimensions, Text, StyleSheet, TextInput
} from 'react-native';
import { Button } from 'react-native-paper';

const styles = StyleSheet.create({
  textInput: {
    fontSize: 17,
    borderWidth: 1,
    padding: 6,
    borderRadius: 7,
    borderColor: '#e1e1e1',
    fontFamily: 'GilroySemiBold',
    fontWeight: 'normal',
  },
  button: {
    paddingVertical: 7,
    width: Dimensions.get('window').width * 0.32,
    backgroundColor: '#f9cb10',
    borderRadius: 25,
  }
});

function PhoneInputForm({ phoneNumber, setPhoneNumber, setOtpSent }) {

  const handleClick = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Cookie': '__cfduid=df9b865983bd04a5de2cf5017994bbbc71618565720' },
      body: JSON.stringify({ number: '+91' + phoneNumber })
    };
    fetch('https://testa2.aisle.co/V1/users/phone_number_login', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setOtpSent(data.status);
      });
  }

  return (
    <React.Fragment>
      <Text style={{ fontFamily: 'GilroySemiBold', fontSize: 18, paddingBottom: 8 }}>Get OTP</Text>
      <Text style={{ fontFamily: 'GilroyBold', fontSize: 42, paddingBottom: 12 }}>Enter Your Phone Number</Text>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 20 }}>
        <Text style={{ borderWidth: 1, borderColor: '#e1e1e1', padding: 9, borderRadius: 7, fontFamily: 'GilroySemiBold', fontSize: 17 }}>+91</Text>
        <TextInput
          value={phoneNumber}
          onChangeText={(e) => setPhoneNumber(e)}
          keyboardType="number-pad"
          variant="outlined"
          textAlign="center"
          dense
          style={[styles.textInput, { width: Dimensions.get('window').width * 0.7 }]}
          fontFamily="GilroySemiBold"
        />
      </View>
      <Button
        mode="contained"
        style={styles.button}
        onPress={(e) => handleClick(e)}
      >
        <Text style={{ fontFamily: 'GilroySemiBold', fontSize: 17, color: 'black', textTransform: 'none' }}>Continue</Text>
      </Button>
    </React.Fragment>
  )
}

export default PhoneInputForm;