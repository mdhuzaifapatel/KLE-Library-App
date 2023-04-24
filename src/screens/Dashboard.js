import React, {useContext} from 'react';
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
// import PushNotification from 'react-native-push-notification';
import moment from 'moment';

export const Dashboard = ({navigation}) => {
  // Data fetch
  const {userInfo} = useContext(AuthContext);
  const {imageURI} = useContext(AuthContext);
  const {getPatronInfo} = useContext(AuthContext);
  const {readingHistory} = useContext(AuthContext);

  const data = userInfo.GetPatronInfo;
  let books = '0';
  let loans = [];

  //************** Conditional rendering section **********************//

  // No. of Books
  try {
    if (data.loans) {
      books = JSON.stringify(Object.keys(data.loans[0].loan).length);
      loans = data.loans[0].loan;
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
  if (
    data.sort1 == 'Electronics & Communication' ||
    data.sort1 == 'E&C' ||
    data.sort1 == 'E & C' ||
    data.sort1 == 'Electrical & Commu.'
  ) {
    branch = 'ECE';
  } else if (
    data.sort1 == 'Computer Science' ||
    data.sort1 == 'Computer Science Engg'
  ) {
    branch = 'CSE';
  } else if (data.sort1 == 'Electrical & Electronics') {
    branch = 'EEE';
  }

  // Notifications

  // for (let loan of loans) {
  //   let date = loan.onloan[0].trim();
  //   console.log(date.trim());
  //   let notificationDate = moment('2023-04-8', 'YYYY-MM-DD')
  //     .set({hour: 12, minute: 10})
  //     .subtract(1, 'day')
  //     .toDate();

  //   //  .subtract(1, 'day').toDate();

  //   console.log('date2: ', notificationDate);

  //   PushNotification.localNotificationSchedule({
  //     channelId: '123',
  //     id: '1236', // Unique ID for the notification
  //     ticker: 'My Notification Ticker', // Ticker text (Android only)
  //     autoCancel: true, // Cancel notification when tapped on (Android only)
  //     largeIcon: 'ic_launcher', // Large icon name (Android only)
  //     smallIcon: 'ic_notification', // Small icon name (Android only)
  //     bigText: `Return your ${loan.title} Book`, // Big text (Android only)
  //     subText: 'ok', // Subtext (Android only)
  //     color: 'red', // Accent color (Android only)
  //     vibrate: true, // Vibration (Android only)
  //     vibration: 300, // Vibration duration in milliseconds, ignored if vibrate=false (Android only)
  //     tag: 'some_tag', // Tag used to replace existing notifications with the same ID (Android only)
  //     group: 'group', // Notification group (Android only)
  //     ongoing: false, // Whether the notification is ongoing (Android only)
  //     priority: 'high', // Notification priority (Android only)
  //     visibility: 'public', // Notification visibility (Android only)
  //     importance: 'high', // Notification importance (Android only)
  //     title: 'Due date tommorow', // Notification title
  //     message: `Return your ${loan.title} Book`, // Notification message
  //     date: notificationDate,
  //     allowWhileIdle: true,
  //   });
  // }

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
              <View style={styles.refresh}>
                <TouchableOpacity
                  onPress={() => {
                    getPatronInfo();
                    readingHistory();
                  }}>
                  <Icon name="refresh" size={hp(2.7)} color="#002c62" />
                </TouchableOpacity>
              </View>
              <View style={styles.bell}>
                <TouchableOpacity onPress={() => {}}>
                  <Icon name="bell" size={hp(2.7)} color="#002c62" />
                </TouchableOpacity>
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
              {imageURI && (
                <Image source={{uri: imageURI}} style={styles.profileImage} />
              )}
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
    marginTop: hp('-16'),
    marginLeft: scale(18),
  },
  profileCardSettings: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: scale(50),
    shadowColor: '#000',
    shadowRadius: scale(5),
    // top: hp(-0.2)
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

  bell: {
    // flexDirection: 'row',
    // alignItems: 'center',
    marginRight: scale(9),
    marginTop: hp(-3),
  },
  refresh: {
    // flexDirection: 'row',
    // alignItems: 'center',
    left: wp(-9),
    marginTop: hp(-3.2),
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
