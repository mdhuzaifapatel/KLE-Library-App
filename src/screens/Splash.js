import React from 'react';
import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import {Colors} from '../../src/constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Splash = ({navigation}) => {
  setTimeout(()=>{
      navigation.replace('Login')
  },3000)
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        marginTop: -295,
      }}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="black"
      />
      <Image
        resizeMode="contain"
        source={require('../assets/images/kle-mobile.png')}
        style={{width: wp('110%'), height: hp('93%'), marginBottom: 60}}
      />
      <View
        style={{
          marginTop: -295,
          marginLeft: 126,
        }}>
        {/* <Text
          style={{fontFamily: 'timesbd', fontSize: 30, color: Colors.kleRed}}>
          LIBRARY
        </Text> */}
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
