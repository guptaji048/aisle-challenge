import React, { useState } from 'react';
import {
  View, Dimensions, Text, StyleSheet, TextInput
} from 'react-native';
import { Button } from 'react-native-paper';
import OtpInputForm from '../forms/OtpInputForm';
import PhoneInputForm from '../forms/PhoneInputForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
  },
});

function OnBoardingScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState();
  const [otpNumber, setOtpNumber] = useState();
  const [otpSent, setOtpSent] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{ marginTop: Dimensions.get('window').height * 0.1, padding: 25 }}>
        {otpSent ? <OtpInputForm otpNumber={otpNumber} setOtpNumber={setOtpNumber} phoneNumber={phoneNumber} setOtpSent={setOtpSent} navigation={navigation} /> : <PhoneInputForm phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} setOtpSent={setOtpSent} />}
      </View>
    </View>
  )
}

export default OnBoardingScreen;
