import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  Linking,
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
import Ionicon from 'react-native-vector-icons/Ionicons';

const Developers = ({navigation}) => {
  DATA = [
    {
      id: 1,
      name: ' Md Huzaifa Patel ',
      title: 'App Developer',
      email: 'mdhuzaifapatel@gmail.com',
      image: require('../assets/images/dev1.jpg'),
      instagram: 'https://instagram.com/huzaifa.py',
      linkedin: 'https://www.linkedin.com/in/muhammad-huzaifa-patel',
      github: 'https://github.com/mdhuzaifapatel',
      websitelink: 'https://mdhuzaifa.tech',
      websitename: 'mdhuzaifa.tech',
      gmail: 'mailto:mdhuzaifapatel@gmail.com',
      batch: '2019-2023',
      branch: 'ECE',
    },
    {
      id: 2,
      name: 'Dhiraj Inchalkaranji',
      title: 'App Developer',
      email: 'itsdhirajdi@gmail.com',
      image: require('../assets/images/dev2.jpg'),
      instagram: 'https://www.instagram.com/dhiraj.inchalkaranji/',
      linkedin: 'https://www.linkedin.com/in/dhirajinchalkaranji/',
      github: 'https://github.com/dhirajinchalkaranji',
      websitelink: 'https://dhiraj-dev.tech',
      websitename: 'dhiraj-dev.tech',
      gmail: 'mailto:dhiraj.jsx@gmail.com',
      batch: '2019-2023',
      branch: 'ECE',
    },
  ];

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar barStyle="dark-content" translucent={true} />
      <View style={{flex: 1, flexDirection: 'column', marginTop: scale(-60)}}>
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
              <Ionicon
                name="logo-react"
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
              Developers
            </Text>
          </View>
        </View>

        {/* Developers List */}

        <View
          style={{
            flex: 3.5,
            backgroundColor: Colors.white,
          }}>
          <FlatList
            data={DATA}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View style={styles.profileCard}>
                {/* Profile Card*/}
                <ImageBackground
                  resizeMode={'cover'} // or cover
                  source={require('../assets/images/bg.jpg')}
                  style={{
                    // marginTop: scale(18),
                    flexDirection: 'row',
                    flex: 1,
                    alignItems: 'center',
                    borderRadius: wp(5),
                  }}>
                  <View
                    style={{
                      marginTop: scale(18),
                      flexDirection: 'row',
                      flex: 1,
                      alignItems: 'center',
                    }}>
                    <View style={styles.profileCardSettings}>
                      <Image
                        style={styles.profileImage}
                        resizeMode="cover"
                        source={item.image}
                      />

                      <Text style={styles.batch}>{item.batch}</Text>
                      <Text style={styles.branch}>{item.branch}</Text>
                    </View>

                    <View style={styles.profileInfo}>
                      {/* Name */}

                      <View
                        style={{flexDirection: 'column', marginBottom: hp(1)}}>
                        <Text style={styles.name}>{item.name}</Text>
                      </View>

                      {/* Title */}
                      <View style={styles.icon}>
                        <Ionicon
                          name="code-slash"
                          size={hp(2)}
                          color="#002c62"
                          style={{top: hp(0.2)}}
                        />
                        <Text style={styles.title}>{item.title}</Text>
                      </View>

                      {/* Website */}
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          left: wp(5),
                          top: hp(0.5),
                        }}>
                        <Icon name="earth" size={hp(2)} color="#002c62" />
                        <TouchableOpacity
                          onPress={() =>
                            Linking.openURL(`${item.websitelink}`)
                          }>
                          <Text style={styles.website}>{item.websitename}</Text>
                        </TouchableOpacity>
                      </View>

                      <View style={styles.socialIconsSection}>
                        <TouchableOpacity
                          onPress={() => Linking.openURL(`${item.gmail}`)}>
                          <Icon
                            name="gmail"
                            size={hp(3)}
                            color="#002c62"
                            style={styles.socialIcons}
                          />
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() => Linking.openURL(`${item.linkedin}`)}>
                          <Ionicon
                            name="logo-linkedin"
                            size={hp(2.7)}
                            color="#002c62"
                            style={styles.socialIcons}
                          />
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() => Linking.openURL(`${item.instagram}`)}>
                          <Ionicon
                            name="logo-instagram"
                            size={hp(2.7)}
                            color="#002c62"
                            style={styles.socialIcons}
                          />
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() => Linking.openURL(`${item.github}`)}>
                          <Ionicon
                            name="logo-github"
                            size={hp(2.8)}
                            color="#002c62"
                            style={styles.socialIcons}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            )}
            // horizontal={true}
          />
        </View>
      </View>
    </View>
  );
};
export default Developers;

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
