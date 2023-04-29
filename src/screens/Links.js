import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Colors} from '../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {scale} from 'react-native-size-matters';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Ionicon from 'react-native-vector-icons/Ionicons';

const Links = ({navigation}) => {
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
                name="link"
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
              Important Links
            </Text>
          </View>
        </View>
      </View>
      <View style={{flex: 3.8}}>
        <Text style={styles.text3}>Library website</Text>
        <Text style={styles.text4}>
          For more information about the library, its services and facilities
          you can visit the institution's official library website. {'\n'}
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(`https://www.klescet.ac.in/library/`)
            }>
            <Text style={[styles.text4, {color: Colors.font2}]}>
              https://www.klescet.ac.in/library/
            </Text>
          </TouchableOpacity>
        </Text>

        <Text style={styles.text3}>E Resources</Text>
        <Text style={styles.text4}>
          The following e -resources subscribed for all branches of engineering
          for UG and PG through VTU e-resource consortium for the year 2022-23.
          {'\n'}
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(`https://www.klescet.ac.in/library-e-resources/`)
            }>
            <Text style={[styles.text4, {color: Colors.font2}]}>
              https://www.klescet.ac.in/library-e-resources/
            </Text>
          </TouchableOpacity>
        </Text>

        <Text style={styles.text3}>Online catalog (EPAC)</Text>
        <Text style={styles.text4}>
          Online catalogue facility is available to users through intranet and
          Internet. By clicking this link, the search page is opened to search
          for the Library resources.{'\n'}
          <TouchableOpacity
            onPress={() => Linking.openURL(`http://103.139.157.231/`)}>
            <Text style={[styles.text4, {color: Colors.font2}]}>
              http://103.139.157.231/
            </Text>
          </TouchableOpacity>
        </Text>

        <Text style={styles.text3}>Remote Access</Text>
        <Text style={styles.text4}>
          The Institution Library also has the facility to give access
          e-resources to outside the Campus Network.{'\n'}The Authenticate users
          by using User Name & Password to access remotely the subscribed
          e-resources through the VTU consortia.{'\n'}
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(`https://klemsscet.mapmyaccess.com`)
            }>
            <Text style={[styles.text4, {color: Colors.font2}]}>
              https://klemsscet.mapmyaccess.com
            </Text>
          </TouchableOpacity>
        </Text>

        <Text style={styles.text3}>Rate us on Google Play</Text>
        <Text style={styles.text4}>
          Visit play store or click the link below to rate us. Your feedback
          will help us improve.
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                `https://play.google.com/store/apps/details?id=com.kle.library`,
              )
            }>
            <Text style={[styles.text4, {color: Colors.font2}]}>
              https://play.google.com/kle.library
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default Links;

const styles = StyleSheet.create({
  container2: {
    top: hp(-5),
  },

  text1: {
    fontFamily: 'BreezeSans-Bold',
    fontSize: responsiveFontSize(3),
    textAlign: 'left',
    color: Colors.font,
    padding: scale(10),
    marginHorizontal: wp(6),
  },

  text2: {
    fontFamily: 'BreezeSans-Bold',
    fontSize: responsiveFontSize(1.8),
    textAlign: 'justify',
    color: Colors.font2,
    marginHorizontal: wp(9),
  },

  text3: {
    fontFamily: 'BreezeSans-Bold',
    fontSize: responsiveFontSize(2.5),
    textAlign: 'left',
    color: Colors.font,
    marginHorizontal: wp(8),
    padding: scale(5),
    marginTop: hp(3),
  },

  text4: {
    fontFamily: 'BreezeSans-Bold',
    fontSize: responsiveFontSize(1.6),
    textAlign: 'left',
    color: Colors.black,
    marginLeft: wp(9),
    marginRight: wp(5),
  },

  text5: {
    fontFamily: 'BreezeSans-Bold',
    fontSize: responsiveFontSize(1.6),
    textAlign: 'left',
    color: Colors.black,
    marginLeft: wp(9),
    paddingVertical: wp(2),
  },

  text6: {
    fontFamily: 'BreezeSans-Bold',
    fontSize: responsiveFontSize(1.6),
    color: Colors.font2,
    paddingLeft: wp(5),
  },

  text7: {
    paddingVertical: 0,
  },

  text8: {
    fontFamily: 'BreezeSans-Bold',
    fontSize: responsiveFontSize(1.6),
    color: Colors.font2,
    paddingLeft: wp(9),
    paddingRight: wp(2),
  },

  email: {
    top: -10,
  },
});
