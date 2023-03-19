import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  AnimationEffect,
  ReadableStreamReader,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {Button} from '@rneui/themed';
import {AuthContext} from '../context/AuthContext';
import {Colors} from '../constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const ScannerScreen = ({navigation}) => {
  const [light, setLight] = useState(false);
  const {barcodeLogin} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <QRCodeScanner
        fadeIn={true}
        showMarker={true}
        reactivate={true}
        reactivateTimeout={3000}
        cameraType={AnimationEffect}
        style={ReadableStreamReader}
        containerStyle={{...styles.outer}}
        ref={node => {
          this.scanner = node;
        }}
        onRead={e => {
          barcodeLogin(e.data);
        }}
        flashMode={
          light
            ? RNCamera.Constants.FlashMode.torch
            : RNCamera.Constants.FlashMode.auto
        }
        topContent={
          <>
            <Text style={styles.topText}>Scan your ID card</Text>
          </>
        }
        bottomContent={
          <>
            <Image
              style={styles.logo}
              resizeMode="contain"
              source={require('../assets/images/kle-logo.png')}
            />
            <Button
              title={`Flash ${light ? 'OFF' : 'ON'}`}
              icon={{
                ...styles.iconButtonHome,
                size: 20,
                name: light ? 'flash-off' : 'flash-on',
              }}
              iconContainerStyle={styles.iconButtonHomeContainer}
              titleStyle={{...styles.titleButtonHome, fontSize: hp(2.4)}}
              buttonStyle={{...styles.buttonHome, height: hp(6)}}
              containerStyle={{
                ...styles.buttonHomeContainer,
              }}
              onPress={() => {
                setLight(!light);
              }}
            />

            <Button
              title={`Refresh`}
              icon={{
                ...styles.iconButtonHome,
                size: 20,
                name: 'refresh',
              }}
              iconContainerStyle={styles.iconButtonHomeContainer}
              titleStyle={{...styles.titleButtonHome, fontSize: hp(2.4)}}
              buttonStyle={{...styles.buttonHome, height: hp(6)}}
              containerStyle={{
                ...styles.buttonHomeContainer,
              }}
              onPress={() => {
                this.scanner.reactivate();
              }}
            />
            <Button
              title={`Back`}
              icon={{
                ...styles.iconButtonHome,
                size: 20,
                name: 'subdirectory-arrow-left',
              }}
              iconContainerStyle={styles.iconButtonHomeContainer}
              titleStyle={{...styles.titleButtonHome, fontSize: hp(2.4)}}
              buttonStyle={{...styles.buttonHome, height: hp(6)}}
              containerStyle={{
                ...styles.buttonHomeContainer,
              }}
              onPress={() => {
                navigation.goBack();
              }}
            />
          </>
        }
      />
    </View>
  );
};

export default ScannerScreen;

const styles = StyleSheet.create({
  outer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: hp(-4),
    margin: hp(1),
  },
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.mainLight,
  },
  logo: {
    height: hp(20),
    width: wp(20),
    bottom: hp(60),
    marginBottom: hp(-25),
  },
  topText: {
    fontFamily: 'BreezeSans-Bold',
    fontSize: hp(3),
    color: Colors.font,
    top: hp(-3),
  },
  iconButtonHomeContainer: {marginRight: 10},
  iconButtonHome: {
    type: 'material',
    size: hp(2),
    color: Colors.font,
  },
  titleButtonHome: {
    fontFamily: 'BreezeSans-Bold',
    fontSize: 25,
    color: Colors.font,
  },
  buttonHome: {
    backgroundColor: Colors.main,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 30,
    height: 100,
  },
  buttonHomeContainer: {
    width: 200,
    marginTop: hp(2),
    marginBottom: hp(1.5),
  },
});
