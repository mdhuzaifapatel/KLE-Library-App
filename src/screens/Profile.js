import React, {useContext} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from 'react-native';
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
import {Colors} from '../constants';
import ProfileGrid from '../components/ProfileGrid';
import {AuthContext} from '../context/AuthContext';

const Profile = ({navigation}) => {
  const {userInfo} = useContext(AuthContext);
  const {imageURI} = useContext(AuthContext);
  const data = userInfo.GetPatronInfo;
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
        {imageURI && (
                <Image source={{uri: imageURI}} style={styles.profileImage} resizeMode='contain' />
              )}
          <Text style={styles.name}>{data.surname}</Text>
          <Text style={styles.usn}>{data.cardnumber}</Text>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',top:-5}}>
            <Icon
              name="email"
              size={scale(15)}
              style={styles.emailIcon}
              color={'#002c6280'}
            />
            <Text style={styles.email}>{data.email}</Text>
          </View>
        </View>

        <ProfileGrid />
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
    height: responsiveScreenHeight(25),
    width: responsiveScreenWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: wp('4%'),
    // borderWidth: wp('0.09%'),
    borderColor: '#00397c',
    top: hp('-25.3%'),
  },

  profileImage: {
    height: hp(15),
    width: hp(15),
    borderRadius: 150,
    borderColor: Colors.font,
    borderWidth: wp('0.05%'),
    top: hp(-1.2),
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
    paddingHorizontal: scale(0.8),
    top: scale(-50),
    height: hp('25'),
  },
  name: {
    color: Colors.font,
    fontFamily: 'BreezeSans-Bold',
    fontSize: responsiveFontSize(2.2),

    textAlign: 'center',
  },
  usn: {
    fontFamily: 'BreezeSans-Bold',
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    color: '#002c6280',
  },
  email: {
    top: 2,
    fontFamily: 'BreezeSans-Bold',
    fontSize: responsiveFontSize(1.5),
    textAlign: 'center',
    color: '#002c6280',
  },
  emailIcon: {
    top: 2.5,
    right: 2,
    fontFamily: 'BreezeSans-Bold',
    textAlign: 'center',
    color: '#002c6280',
  },
});
