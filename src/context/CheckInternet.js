import {StyleSheet, Image, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const CheckInternet = ({isConnected, setIsConnected}) => {
  const navigation = useNavigation();
  useEffect(() => {
    // Subscribe
    const unsubscribe = NetInfo.addEventListener(state => {
      //   console.log('Connection type', state.type);
      //   console.log('Is connected?', state.isConnected);
      setIsConnected(state.isConnected);
    });

    // Unsubscribe
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      {isConnected == true ? null : (
        <View>
          <Image
            source={require('../assets/images/nointernet.png')}
            style={styles.image}
          />
          <View style={styles.container2}>
            <Text style={styles.text1}>
              {isConnected == true ? '' : 'No internet connection'}
            </Text>
            <Text style={styles.text2}>
              Try turning on your Wifi or Mobile Data for using the app
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default CheckInternet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
