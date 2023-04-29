import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {scale} from 'react-native-size-matters';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import InputField from '../components/InputField';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AwesomeAlert from 'react-native-awesome-alerts';
import axios from 'axios';
import {CHANGE_PASSWORD_URL} from '../utils/config';
import {AuthContext} from '../context/AuthContext';

const ChangePassword = ({navigation}) => {
  const [currentPassword, setcurrentPassword] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [showCurrentPassword, setShowcurrentPassword] = useState(false);
  const [showNewPassword, setShownewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState();
  const [touch, setTouch] = useState();
  const {changePassword} = useContext(AuthContext);

  /*  
  const togglePasswordVisibility = () =>
    setShowcurrentPassword(!showCurrentPassword);

  const toggleNewPasswordVisibility = () =>
    setShownewPassword(!showNewPassword);

  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);
 */

  const handlePress = () => {
    if (newPassword === confirmPassword) {
      changePassword(newPassword, confirmPassword);
      // passwords match, proceed with sending the request
    } else {
      // passwords don't match, show error message
      setShowAlert(true);
      setAlertMsg(`Passwords don't match`);
      setButtonText('OK');
      setTouch(true);
    }
  };

  return (
    <>
      <AwesomeAlert
        show={showAlert}
        // alertContainerStyle={{backgroundColor: Colors.white}}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: Colors.white,
          height: hp(18),
          width: wp(70),
        }}
        title="KLE Library"
        titleStyle={{
          fontSize: responsiveFontSize(2),
          fontFamily: 'BreezeSans-Bold',
          color: Colors.font,
        }}
        message={alertMsg}
        messageStyle={{
          fontSize: responsiveFontSize(1.8),
          fontFamily: 'BreezeSans-Bold',
          color: Colors.font2,
        }}
        showConfirmButton={true}
        confirmText={buttonText}
        confirmButtonTextStyle={{
          fontSize: responsiveFontSize(1.7),
          fontFamily: 'BreezeSans-Bold',
          color: Colors.font,
        }}
        confirmButtonStyle={{backgroundColor: Colors.main}}
        onConfirmPressed={() => {
          setShowAlert(false);
        }}
        closeOnTouchOutside={touch}
      />

      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar barStyle="dark-content" translucent={true} />
        <View style={{flex: 1.3, flexDirection: 'column', marginTop: hp(-7)}}>
          {/* Backbutton with header  */}
          <View
            style={{
              flex: 1,
              backgroundColor: Colors.main,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                top: hp(5),
              }}>
              {/* backbutton */}
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  name="arrow-left"
                  size={scale(23)}
                  margin={scale(18)}
                  color={Colors.font}
                />
              </TouchableOpacity>

              <View style={{marginLeft: scale(-20)}}>
                <Icon
                  name="key"
                  size={scale(23)}
                  margin={scale(18)}
                  color={Colors.font}
                />
              </View>

              {/* header Text */}
              <Text
                style={{
                  width: wp(50),
                  marginTop: wp(-0.9),
                  marginLeft: wp(-1.5),
                  textAlign: 'left',
                  fontFamily: 'BreezeSans-Bold',
                  fontSize: scale(17),
                  color: Colors.font,
                }}>
                Change Password
              </Text>
            </View>
          </View>

          <View
            style={{
              flex: 0.5,
              backgroundColor: Colors.white,
            }}></View>
        </View>

        {/* FORM */}
        <View style={{flex: 2.5, padding: scale(20)}}>
          {/* Current */}
          <InputField
            label={'Current Password'}
            color={Colors.font}
            icon={
              <Ionicons
                name="lock-closed"
                size={23}
                color={Colors.font}
                style={{marginRight: 5}}
              />
            }
            // icon2={
            //   <Ionicons
            //     name={showCurrentPassword ? 'eye' : 'eye-off'}
            //     size={24}
            //     color="gray"
            //     onPress={togglePasswordVisibility}
            //   />
            // }

            // visibilty={!showCurrentPassword}
            inputType="password"
            value={currentPassword}
            onChangeText={text => setcurrentPassword(text)}
          />

          {/* NewPassword */}
          <InputField
            label={'New Password'}
            icon={
              <Ionicons
                name="key"
                size={22}
                color={Colors.font}
                style={{marginRight: 5}}
              />
            }
            // icon2={
            //   <Ionicons
            //     name={showNewPassword ? 'eye' : 'eye-off'}
            //     size={24}
            //     color="gray"
            //     onPress={toggleNewPasswordVisibility}
            //   />
            // }
            // visibilty={showNewPassword}
            inputType="password"
            // fieldButtonLabel={'Forgot?'}
            // fieldButtonFunction={() => {}}
            value={newPassword}
            onChangeText={text => setnewPassword(text)}
          />

          {/* Confirm password */}
          <InputField
            label={'Confirm Password'}
            icon={
              <Ionicons
                name="key"
                size={22}
                color={Colors.font}
                style={{marginRight: 5}}
              />
            }
            // icon2={
            //   <Ionicons
            //     name={showConfirmPassword ? 'eye' : 'eye-off'}
            //     size={24}
            //     color="gray"
            //     onPress={toggleConfirmPasswordVisibility}
            //   />
            // }
            // secureTextEntry={!showConfirmPassword}
            inputType="password"
            value={confirmPassword}
            onChangeText={text => setconfirmPassword(text)}
          />

          {currentPassword == '' ||
          newPassword == '' ||
          confirmPassword == '' ? (
            <TouchableOpacity
              disabled
              style={{
                backgroundColor: Colors.main2,
                padding: 10,
                borderRadius: 10,
                marginBottom: 5,
                marginTop: 5,
                height: hp(7),
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
                    color: Colors.font2,
                    fontFamily: 'BreezeSans-Bold',
                  }}>
                  Change Password
                </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={handlePress}
              style={{
                backgroundColor: Colors.main,
                padding: 10,
                borderRadius: 10,
                marginBottom: 5,
                marginTop: 5,
                height: hp(7),
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
                  Change Password
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};
export default ChangePassword;

const styles = StyleSheet.create({
  // image: {
  //   width: wp(90),
  //   height: wp(120),
  //   resizeMode: 'contain',
  //   alignSelf: 'center',
  // },

  container2: {
    top: hp(-5),
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
    marginHorizontal: wp(9),
  },

  profileCard: {
    flexDirection: 'row',
    height: responsiveScreenHeight(23),
    width: responsiveScreenWidth(90),
    // alignItems: 'flex-start',
    // justifyContent: 'space-around',
    // borderRadius: wp('4%'),
    // borderWidth: wp('0.09%'),
    borderColor: '#00397c',
    elevation: hp('0.5%'),
    // shadowColor: '#000',
    // shadowRadius: wp('50%'),
    marginTop: hp('4%'),
    marginBottom: hp('1%'),
    marginLeft: scale(18),
  },

  profileCardSettings: {
    flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    // marginLeft: scale(50),
    shadowColor: '#000',
    // shadowRadius: scale(5),
  },

  profileImage: {
    height: hp(13.5),
    width: hp(13.5),
    borderRadius: hp(50),
    borderColor: '#00397c',
    top: hp(-2.5),
    left: wp(3.3),
    // borderWidth: 0,
    // right: scale(22),
    // borderWidth: wp('0.06%'),
  },

  profileInfo: {
    marginLeft: hp(-10),
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  title: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'BreezeSans-Bold',
    color: Colors.font,
    // textShadowRadius: wp('2.2%'),
    left: scale(10),
  },

  name: {
    fontSize: responsiveFontSize(2.8),
    fontFamily: 'BreezeSans-Bold',
    color: '#000000cc',
    textShadowColor: Colors.font,
    left: wp(0.5),
  },

  website: {
    fontSize: responsiveFontSize(1.7),
    fontFamily: 'BreezeSans-Bold',
    color: Colors.font,
    left: scale(10),
  },

  batch: {
    top: hp(-0.5),
    fontSize: responsiveFontSize(1.7),
    fontFamily: 'BreezeSans-Bold',
    color: Colors.font,
    left: wp(8),
  },

  branch: {
    top: hp(-0.5),
    fontSize: responsiveFontSize(1.7),
    fontFamily: 'BreezeSans-Bold',
    color: Colors.font,
    left: wp(13),
  },

  icon: {
    flex: 0.5,
    flexDirection: 'row',
    left: wp(5),
    // top: hp(-0.5),
  },

  socialIconsSection: {
    flex: 1,
    flexDirection: 'row',
    left: wp(2),
    top: hp(0.5),
  },

  socialIcons: {
    // flex: 5,
    // flexDirection: 'row',
    marginRight: wp(5.5),
    paddingRight: wp(2),
  },
});
