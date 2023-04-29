import React, {useState, useContext} from 'react';
import {
  Text,
  ScrollView,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../src/constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useContext(AuthContext);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.white,
      }}>
      <ScrollView
        style={{paddingHorizontal: 25, backgroundColor: Colors.mainLight}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../assets/images/klec.png')}
            style={{
              height: hp(35),
              width: wp(70),
              resizeMode: 'contain',
            }}
          />
        </View>

        <Text
          style={{
            fontFamily: 'BreezeSans-Bold',
            fontSize: responsiveFontSize(2.5),
            fontWeight: '500',
            textAlign: 'center',
            color: Colors.font,
            marginBottom: hp(7),
          }}>
          Sign in to your account
        </Text>

        <InputField
          label={'Enter USN or card number'}
          color={Colors.font}
          icon={
            <Ionicons
              name="person-circle-outline"
              size={23}
              color={Colors.font}
              style={{marginRight: 5}}
            />
          }
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <InputField
          label={'Password'}
          icon={
            <Ionicons
              name="lock-closed"
              size={22}
              color={Colors.font}
              style={{marginRight: 5}}
            />
          }
          inputType="password"
          // fieldButtonLabel={'Forgot?'}
          // fieldButtonFunction={() => {}}
          value={password}
          onChangeText={text => setPassword(text)}
        />

        {email == '' || password == '' ? (
          <TouchableOpacity
            disabled
            style={{
              backgroundColor: Colors.main2,
              padding: 20,
              borderRadius: 10,
              marginBottom: 5,
              marginTop: 5,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Ionicons
                name="enter-outline"
                size={responsiveFontSize(2.3)}
                style={{marginRight: wp(2)}}
                color={Colors.font2}
              />
              <Text
                style={{
                  textAlign: 'center',

                  fontSize: responsiveFontSize(2),
                  color: Colors.font2,
                  fontFamily: 'BreezeSans-Bold',
                }}>
                Sign in
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              login(email, password);
            }}
            style={{
              backgroundColor: Colors.main,
              padding: 20,
              borderRadius: 10,
              marginBottom: 5,
              marginTop: 5,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Ionicons
                name="enter"
                size={responsiveFontSize(2.3)}
                style={{marginRight: wp(2)}}
                color={Colors.font}
              />
              <Text
                style={{
                  textAlign: 'center',

                  fontSize: responsiveFontSize(2),
                  color: Colors.font,
                  fontFamily: 'BreezeSans-Bold',
                }}>
                Sign in
              </Text>
            </View>
          </TouchableOpacity>

          // <CustomButton
          //   label={'Sign in'}
          //   onPress={() => {
          //     login(email, password);
          //   }}
          // />
        )}

        <Text
          style={{
            textAlign: 'center',
            color: Colors.font,
            fontFamily: 'BreezeSans-Bold',
            padding: hp(1),
          }}>
          OR
        </Text>
        <CustomButton
          label={'Scan ID Barcode'}
          onPress={() => {
            navigation.navigate('ScannerScreen');
          }}
          name={'scan-outline'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
