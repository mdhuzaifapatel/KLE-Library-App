import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Welcome = ({navigation}) => {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <StatusBar
        barstyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />

      <LinearGradient
        start={{x: 0.0, y: 0.4}}
        end={{x: 0.5, y: 1.0}}
        location={[0, 1]}
        colors={['#2D97DA', '#2249D6']}
        style={{flex: 1}}>
        {/* Top Section */}
        <View
          style={{
            marginTop: -100,
            flex: 2.5,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <Image
          
            resizeMode="contain"
            style={{width: wp('90%'), height: hp('90%')}}
            source={require('../assets/images/kle.png')}
          />
        </View>

        {/* Button and text section */}
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            paddingHorizontal: wp('5%'),
          }}>
          <View
            style={{
              position: 'relative',
              marginTop: -100,
              flexDirection: 'column',
              backgroundColor: 'rgba(255,255,255,0.3)',
              height: hp('35%'),
              borderRadius: 15,
              paddingTop: 20,
              paddingHorizontal: wp('5%'),
            }}>
            <Text
              style={{
                fontFamily: 'Roboto-Black',
                fontSize: 25,
                color: '#fff',
                alignSelf: 'center',
                textAlign: 'center',
              }}>
              KLE LIBRARY
            </Text>

            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Roboto-Regular',
                alignSelf: 'center',
                paddingTop: 20,
                color: '#fff',
                textAlign: 'center',
              }}>
              Welcome to Library and Information center. {'\n'}
              {'\n'} It is centrally located in the campus, housed in a three
              stored ultra-modern Library Building
              {'                          '} “JNANA CHETANA”
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={{
                position: 'relative',
                width: '100%',
                backgroundColor: '#fff',
                height: 50,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 30,
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto-Bold',
                  fontSize: 17,
                  color: '#2D97DA',
                }}>
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
