import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  StatusBar,
  Image,
  TextInput,
} from 'react-native';
import {Colors} from '../../src/constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import Buttons from '../components/Buttons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Login = ({navigation}) => {
  const [formData, setformData] = useState({
    email: '',
    password: '',
  });

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#fff', flexDirection: 'column'}}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      {/* login form section */}
      <View
        style={{
          marginTop: hp('7%'),
          marginLeft: wp('3%'),
          flex: 2,
          flexDirection: 'column',
          backgroundColor: '#fff',
          paddingTop: hp('6%'),
          paddingHorizontal: wp('3%'),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'BreezeSans-Bold',
              fontSize: hp('4%'),
              // fontSize: 30,
              color: Colors.black,
            }}>
            Welcome Back
          </Text>
          <Image
            source={require('../assets/images/waving_hand.png')}
            style={{width: wp('7%'), height: hp('4%'), marginLeft: wp('2%')}}
          />
        </View>
        <Text
          style={{
            fontFamily: 'BreezeSans-Medium_20150728',
            fontSize: hp('2%'),
            paddingTop: hp('1%'),
            color: '#777',
          }}>
          You can continue where you left off by logging in
        </Text>

        <View style={{flexDirection: 'column', paddingTop: hp('5%')}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ededed',
              width: wp('86.5%'),
              borderRadius: wp('3%'),
              height: hp('6.8%'),
              paddingLeft: wp('5%'),
            }}>
            <Icon name="user" size={wp('5%')} color="#818181" />
            <TextInput
              onChangeText={text => {
                setformData(prevState => ({...prevState, email: text}));
              }}
              style={styles.input}
              placeholder="Enter your USN"
              placeholderTextColor="#818181"
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ededed',
              width: wp('86.5%'),
              borderRadius: wp('3%'),
              height: hp('6.8%'),
              paddingLeft: wp('5%'),
              marginTop: hp('2.3%'),
            }}>
            <Icon name="lock" size={wp('5.5%')} color="#818181" />
            <TextInput
              onChangeText={text => {
                setformData(prevState => ({...prevState, password: text}));
              }}
              style={styles.input}
              placeholder="Enter your Password"
              secureTextEntry={true}
              placeholderTextColor="#818181"
            />
          </View>

          <View
            style={{
              width: wp('85%'),
              marginBottom: hp('1'),
            }}>
            <Text
              style={{
                fontSize: hp('1.85%'),
                fontFamily: 'BreezeSans-Medium_20150728',
                color: '#818181',
                alignSelf: 'flex-end',
                paddingTop: hp('4.65%'),
              }}>
              Forgot Password?
            </Text>
          </View>

          <Buttons
            btn_text={'Sign In'}
            on_press={() => navigation.navigate('Home')}
          />
        </View>
      </View>

      {/* social login section */}
      {/* <View
        style={{
          flex: 2,
          backgroundColor: '#fff',
          flexDirection: 'column',
          paddingHorizontal: '3%',
        }}>
        <Text
          style={{
            fontFamily: 'OpenSans-Bold',
            textAlign: 'center',
            marginVertical: 35,
            color: '#818181',
            fontSize: 20,
          }}>
          Or
        </Text>

        <View
          style={{flexDirection: 'column', alignItems: 'center', width: '95%'}}>
          <TouchableOpacity
            onPress={() => console.log('google login')}
            style={styles.social_btn}>
            <Image
              style={styles.social_img}
              source={require('../assets/images/google_icon.png')}
            />
            <Text
              style={{
                width: '80%',
                textAlign: 'center',
                fontSize: 16,
                fontFamily: 'OpenSans-Medium',
              }}>
              Sign in with Google{' '}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log('facebook login')}
            style={styles.social_btn}>
            <Image
              style={styles.social_img}
              source={require('../assets/images/facebook_icon.png')}
            />
            <Text
              style={{
                width: '80%',
                textAlign: 'center',
                fontSize: 16,
                fontFamily: 'OpenSans-Medium',
              }}>
              Sign in with Facebook{' '}
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
            backgroundColor: '#fff',
            marginBottom: 40,
          }}>
          <Text
            style={{
              fontFamily: 'OpenSans-Medium',
              fontSize: 17,
              color: '#818181',
            }}>
            Don't have a account?{' '}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'OpenSans-SemiBold',
              color: '#333',
            }}>
            Sign Up
          </Text>
        </View>
      </View> */}
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    position: 'relative',
    height: hp('100%'),
    width: wp('76.5%'),
    fontFamily: 'BreezeSans-Medium_20150728',
    fontSize: wp('4%'),
    paddingLeft: wp('6%'),
  },
});
