import React from 'react';
import {Text, View, Image, TouchableOpacity, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScaledSheet, scale} from 'react-native-size-matters';
import DashboardGrid from '../components/DashboardGrid';
import {Colors} from '../constants';
const Profile = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      {/* Statusbar */}
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />

      {/* Background gradient */}
      <LinearGradient
        start={{x: 15, y: 1}}
        end={{x: 1, y: 15}}
        location={[0, 1]}
        colors={['#ACB5F4', '#b7bef2', '#b7bef2', '#ACB5F4']}
        style={{flex: 1.2, flexDirection: 'column', paddingBottom: hp(5.5)}}>
        {/* Navbar  */}
        <View style={styles.navbarSettings}>
          <View
            style={{
              flex: 1,
              backgroundColor: Colors.main,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginBottom: scale(-40),
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
                name="card-account-details"
                size={scale(23)}
                margin={scale(18)}
                color={Colors.font}
              />
            </View>

            {/* header Text */}
            <Text
              style={{
                width: scale(150),
                marginTop: scale(-0.9),
                marginLeft: scale(-50),
                textAlign: 'center',
                fontFamily: 'BreezeSans-Bold',
                fontSize: scale(18),
                color: Colors.font,
              }}>
              Profile
            </Text>
          </View>
        </View>
      </LinearGradient>

      {/* Body section */}
      <View style={styles.body}>
        {/* Profile Card Gradient*/}

        {/* Profile Card*/}
        <View style={styles.profileCard}>
          <Image
            style={styles.profileImage}
            resizeMode="contain"
            source={require('../assets/images/profile.png')}
          />
        </View>

        {/* Dashboard Buttons */}
        {/* <DashboardGrid /> */}
      </View>
    </View>
  );
};

export default Profile;

const styles = ScaledSheet.create({
  body: {
    flex: 2.5,
    // backgroundColor: '#fff',
    // paddingHorizontal: scale(18),
  },
  profileCard: {
    height: responsiveScreenHeight(18),
    width: responsiveScreenWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: wp('4%'),
    // borderWidth: wp('0.09%'),
    // borderColor: '#00397c',
    marginTop: hp('-25%'),
  },

  profileImage: {
    height: responsiveScreenHeight(15),
    width: responsiveScreenWidth(32),
    borderRadius: scale(100),
    borderColor: Colors.font,
    borderWidth: wp('0.05%'),
  },

  title: {
    fontFamily: 'BreezeSans-Bold',
    fontSize: scale(20),
    color: Colors.font,
    marginLeft: scale(-251),
    marginTop: scale(-0.5),
  },

  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: -180,
  },
  navbarSettings: {
    flexDirection: 'column',
    // marginTop: scale(50),
    paddingHorizontal: scale(0.8),
    top: scale(-45),
    height: hp('25'),
  },
});
