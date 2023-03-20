import {StyleSheet, Image, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../constants';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const CheckInternet = () => {
  return (
    <View style={styles.main}>
        <View style={styles.container}>
          <Image
            source={require('../assets/images/nointernet.png')}
            style={styles.image}
          />
          <View style={styles.container2}>
            <Text style={styles.text1}>No internet connection</Text>
            <Text style={styles.text2}>
              Try turning on your Wifi or Mobile Data for using the app
            </Text>
          </View>
        </View>
    </View>
  );
};

export default CheckInternet;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.mainLight,
  },
  image: {
    width: wp(85),
    height: wp(120),
    resizeMode: 'contain',
    alignSelf: 'center',
    top: hp(-8),
  },
  container2: {
    top: hp(-9),
  },
  text1: {
    fontFamily: 'BreezeSans-Bold',
    fontSize: responsiveFontSize(3),
    textAlign: 'center',
    color: Colors.font,
  },
  text2: {
    fontFamily: 'BreezeSans-Bold',
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    color: Colors.font2,
    marginHorizontal: wp(5),
  },
});
