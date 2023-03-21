import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {Colors} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
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
      name: 'First Item',
    },
    {
      id: 2,
      name: 'Second Item',
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
            backgroundColor: Colors.main2,
            // marginTop: scale(-20),
            // marginBottom: scale(6),
          }}>
          <FlatList
            style={{}}
            data={DATA}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <LinearGradient
                start={{x: 0.0, y: 0.1}}
                end={{x: 1, y: 1.0}}
                location={[1, 0]}
                colors={['#7881dc', '#9ba6f6', '#b7bef2', '#7881dc']}
                style={styles.profileCard}>
                {/* Profile Card*/}
                <View style={{marginTop: scale(18)}}>
                  <View style={styles.profileCardSettings}>
                    <Image
                      style={styles.profileImage}
                      resizeMode="cover"
                      source={require('../assets/images/profile.png')}
                    />
                  </View>

                  <View style={styles.profileInfo}>
                    {/* USN */}
                    <Text style={styles.usn}>2442</Text>

                    {/* Course */}
                    <View style={styles.category1}>
                      <Icon
                        name="school"
                        size={hp(2.5)}
                        color="#002c62"
                        style={{top: hp(0.2)}}
                      />
                      <Text style={styles.category2}>stthdhd</Text>
                    </View>

                    {/* Branch */}
                    <View style={{top: hp(-2)}}>
                      <Text style={styles.profileCardTextRight}>
                        <Text style={styles.profileCardTextLeft}>Branch: </Text>{' '}
                        ss
                      </Text>

                      {/* D.O.B */}
                      <Text style={styles.profileCardTextRight}>
                        <Text style={styles.profileCardTextLeft}>D.O.B: </Text>{' '}
                        sss
                      </Text>

                      {/* No. Books issued */}
                      <Text style={styles.profileCardTextRight}>
                        <Text style={styles.profileCardTextLeft}>
                          Books issued:{' '}
                        </Text>{' '}
                        ss
                      </Text>

                      {/* Fine */}
                      <Text style={styles.profileCardTextRight}>
                        <Text style={styles.profileCardTextLeft}>
                          Fine amount:{' '}
                        </Text>{' '}
                        ₹ 45
                      </Text>
                    </View>
                  </View>
                </View>
              </LinearGradient>
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
  image: {
    width: wp(90),
    height: wp(120),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
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
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: wp('4%'),
    borderWidth: wp('0.09%'),
    borderColor: '#00397c',
    elevation: hp('2.5%'),
    shadowColor: '#000',
    shadowRadius: wp('1%'),
    marginTop: hp('5%'),
    marginLeft: scale(18),
  },
  profileCardSettings: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: scale(50),
    shadowColor: '#000',
    shadowRadius: scale(5),
  },
  profileImage: {
    height: responsiveScreenHeight(20),
    width: responsiveScreenWidth(30),
    borderRadius: scale(10),
    borderColor: '#00397c',
    right: scale(22),
    // borderWidth: wp('0.06%'),
  },
  profileInfo: {
    flex: 1,
    flexDirection: 'column',
    width: scale(200),
    marginLeft: scale(145),
    marginTop: scale(-125),
  },

  usn: {
    marginTop: responsiveScreenHeight(-2.5),
    fontSize: responsiveFontSize(3.4),
    fontFamily: 'BreezeSans-Bold',
    color: '#fff',
    textShadowColor: '#00397c',
    textShadowOffset: {width: 0.5, height: 1},
    textShadowRadius: 5,
    paddingBottom: scale(5),
  },
  profileCardTextRight: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'OpenSans-Medium',
    color: '#00397c',
    textShadowRadius: wp('2.2%'),
    left: scale(7),
  },
  profileCardTextLeft: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'BreezeSans-Bold',
    color: '#00397c',
    textShadowRadius: wp('2.2%'),
  },
  category2: {
    fontSize: hp(2.2),
    fontFamily: 'BreezeSans-Bold',
    // textShadowColor: '#002c62',
    color: '#00397c',
    textShadowRadius: wp('2.2%'),
    left: scale(7),
  },
  category1: {
    flex: 1,
    flexDirection: 'row',
    left: scale(7),
    top: hp(-0.5),
  },
});
