import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Buttons = ({on_press, btn_text}) => {
  return (
    <LinearGradient
      colors={['#2D97DA', '#2249D6']}
      style={{
        justifyContent: 'center',
        width: wp('87%'),
        backgroundColor: '#1E80ED',
        height: hp('6%'),
        // marginBottom: hp('21%'),
        borderRadius: wp('3%'),
      }}>
      <TouchableOpacity onPress={on_press}>
        <Text
          style={{
            fontSize: hp('2%'),
            letterSpacing: wp('0.2%'),
            textAlign: 'center',
            position: 'relative',
            fontFamily: 'BreezeSans-Medium_20150728',
            color: Colors.white,
          }}>
          {btn_text}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Buttons;

const styles = StyleSheet.create({});
