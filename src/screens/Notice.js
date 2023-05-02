import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {scale} from 'react-native-size-matters';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import AwesomeAlert from 'react-native-awesome-alerts';

function Notice({route, navigation}) {
  const [showAlert, setShowAlert] = useState(false);
  const [titleMsg, setTitleMsg] = useState('');
  const [alertMsg, setAlertMsg] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [touch, setTouch] = useState();
  let notificationData = `\t\t\t\t\t\t\t\t\t\t\t  No new notifications`;
  let notificationTitle = 'KLE Library Notice';
  try {
    notificationData = route.params.notificationData;
    notificationTitle = route.params.notificationTitle;
    console.log(notificationData);
  } catch (e) {
    console.log(e);
  }

  return (
    <>
      {/*========================== ALERT CODE ==========================*/}
      <AwesomeAlert
        show={showAlert}
        // alertContainerStyle={{backgroundColor: Colors.white}}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: Colors.white,
          height: hp(24),
          width: wp(70),
        }}
        title={titleMsg}
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
        confirmButtonStyle={{top: hp(1.5), backgroundColor: Colors.main}}
        onConfirmPressed={() => {
          setShowAlert(false);
        }}
        closeOnTouchOutside={touch}
      />

      {/*========================== DASHBOARD CODE ==========================*/}

      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar barStyle="dark-content" translucent={true} />
        <View style={{flex: 1, flexDirection: 'column', marginTop: scale(-60)}}>
          {/* Backbutton with header */}
          <View
            style={{
              flex: 1,
              backgroundColor: Colors.main,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginBottom: scale(-60),
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
                name="bell"
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
                marginLeft: scale(-25),
                textAlign: 'center',
                fontFamily: 'BreezeSans-Bold',
                fontSize: scale(17),
                color: Colors.font,
              }}>
              Notifications
            </Text>
          </View>

          <View
            style={{
              flex: 2.5,
              backgroundColor: '#fff',
              marginTop: scale(-20),
              marginBottom: scale(6),
            }}>
            {/* <Image
              source={require('../assets/images/noBooks.png')}
              style={styles.image}
            /> */}
            <View style={styles.container2}>
              <Text style={styles.text1}>{notificationTitle}</Text>
              <Text style={styles.text2}>{notificationData}</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default Notice;

const styles = StyleSheet.create({
  image: {
    width: wp(90),
    height: wp(120),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  container2: {
    top: hp(10),
  },
  text1: {
    top: hp(-2),
    fontFamily: 'BreezeSans-Bold',
    fontSize: responsiveFontSize(3),
    textAlign: 'center',
    color: Colors.font,
  },
  text2: {
    fontFamily: 'BreezeSans-Bold',
    fontSize: responsiveFontSize(2),
    textAlign: 'justify',
    color: Colors.font2,
    marginHorizontal: wp(9),
  },
});
