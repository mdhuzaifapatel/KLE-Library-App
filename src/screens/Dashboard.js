import React, {useContext, useState} from 'react';
import {AuthContext} from '../context/AuthContext';
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

export const Dashboard = ({navigation}) => {
  // Data fetch
  const {userInfo} = useContext(AuthContext);
  const data = userInfo.GetPatronInfo;
  let books = '0';

  //************** Conditional rendering section **********************//

  // No. of Books
  try {
    if (data.loans) {
      books = JSON.stringify(Object.keys(data.loans[0].loan).length);
    }
  } catch (e) {}

  //For Category
  if (data.categorycode == 'ST') {
    var category = 'STUDENT';
  } else if (data.categorycode == 'S') {
    var category = 'STAFF';
  } else {
    var category = '';
  }

  //For Branch
  let branch = data.sort1;
  if (data.sort1 == 'Electronics & Communication' || data.sort1 == 'E&C') {
    branch = 'EC';
  } else if (
    data.sort1 == 'Computer Science' ||
    data.sort1 == 'Computer Science Engg'
  ) {
    branch = 'CSE';
  } else if (data.sort1 == 'Electrical & Electronics') {
    branch = 'E&E';
  }

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
        style={{flex: 1.2, flexDirection: 'column'}}>
        {/* Navbar  */}
        <View style={styles.navbarSettings}>
          <View style={styles.navbar}>
            {/* Drawer Icon */}
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <View style={styles.drawerIcon}>
                <Icon name="menu" size={scale(25)} color="#002c62" />
              </View>
            </TouchableOpacity>

            {/* App Title*/}
            <View>
              <Text style={styles.title}>KLE LIBRARY</Text>
              <View style={styles.bell}>
                <Icon name="bell" size={scale(20)} color="#002c62" />
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>

      {/* Body section */}
      <View style={styles.body}>
        {/* Profile Card Gradient*/}
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
              <Text style={styles.usn}>{data.cardnumber}</Text>

              {/* Course */}
              <View style={styles.category1}>
                <Icon
                  name="school"
                  size={hp(2.5)}
                  color="#002c62"
                  style={{top: hp(0.2)}}
                />
                <Text style={styles.category2}>{category}</Text>
              </View>

              {/* Branch */}
              <View style={{top: hp(-2)}}>
                <Text style={styles.profileCardTextRight}>
                  <Text style={styles.profileCardTextLeft}>Branch: </Text>{' '}
                  {branch}
                </Text>

                {/* D.O.B */}
                <Text style={styles.profileCardTextRight}>
                  <Text style={styles.profileCardTextLeft}>D.O.B: </Text>{' '}
                  {data.dateofbirth}
                </Text>

                {/* No. Books issued */}
                <Text style={styles.profileCardTextRight}>
                  <Text style={styles.profileCardTextLeft}>Books issued: </Text>{' '}
                  {books}
                </Text>

                {/* Fine */}
                <Text style={styles.profileCardTextRight}>
                  <Text style={styles.profileCardTextLeft}>Fine amount: </Text>{' '}
                  ₹ {data.charges}
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>

        {/* Dashboard Buttons */}
        <DashboardGrid />
      </View>
    </View>
  );
};

export default Dashboard;

// Styles
const styles = ScaledSheet.create({
  body: {
    flex: 2.5,
    // backgroundColor: '#fff',
    // paddingHorizontal: scale(18),
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
    marginTop: hp('-16%'),
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
    height: hp(20),
    width: hp(15),
    borderRadius: hp(1),
    borderColor: '#00397c',
    right: scale(22),
    // borderWidth: wp('0.06%'),
  },
  profileInfo: {
    flex: 1,
    flexDirection: 'column',
    width: scale(200),
    marginLeft: hp(20),
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

  bell: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: scale(9),
    marginTop: scale(-24),
  },
  title: {
    fontFamily: 'BreezeSans-Bold',
    fontSize: scale(20),
    color: Colors.font,
    marginLeft: scale(-251),
    marginTop: scale(-0.5),
  },
  drawerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  navbarSettings: {
    flexDirection: 'column',
    marginTop: scale(50),
    paddingHorizontal: scale(18),
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
