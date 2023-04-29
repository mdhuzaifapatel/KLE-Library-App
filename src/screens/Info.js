import React from 'react';
import {
  View,
  ScrollView,
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
import Ionicon from 'react-native-vector-icons/Ionicons';

const Info = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar barStyle="dark-content" translucent={true} />
      <View style={{flex: 1, flexDirection: 'column', marginBottom: hp(-30)}}>
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
              top: hp(2),
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
                name="information-circle"
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
              About Library
            </Text>
          </View>
        </View>
      </View>
      <ScrollView style={{marginTop: hp(30)}}>
        <Text style={styles.text1}>Welcome to KLE Library</Text>
        <Text style={styles.text2}>
          It is centrally located in the campus, housed in a three stored
          ultra-modern Library Building “JNANA CHETANA” with an excellent
          collection of books, journals and non-book material in Engineering
          Technology and Management. The Library has over 1,06,000 volumes which
          are updated regularly by way of adding new literature in the form of
          text books, reference books, reports, proceedings, encyclopedias,
          standards (National & International) Journals, Audio Visual resources,
          CDs, educational videos and thesis/reports.
        </Text>

        <Text style={styles.text3}>Working Hours</Text>
        <Text style={styles.text4}>
          Monday to saturday :{' '}
          <Text style={{color: Colors.font2}}>08.00 A.M. - 09.00 P.M.</Text>
        </Text>
        <Text style={styles.text4}>
          Sunday & Government Holidays :{' '}
          <Text style={{color: Colors.font2}}>10.00 A.M. - 05.00 P.M.</Text>
        </Text>
        <Text style={styles.text4}>
          Reading Hall :<Text style={{color: Colors.font2}}> 24 Hours</Text>
        </Text>

        <Text style={styles.text3}>Contact us</Text>
        <Text style={[styles.text5, styles.text7]}>Address</Text>
        <Text style={styles.text2}>Dr. Satish V Totar</Text>
        <Text style={styles.text8}>
          (Head of Library and Information Center) {'\n'}
        </Text>
        <Text style={styles.text8}>
          KLE Technological University's (Belagavi Campus), {'\n'} Dr. M.S.
          Sheshgiri College of Engineering and Technology
        </Text>
        <Text style={styles.text5}>
          Telephone :<Text style={[styles.text6]}> 0831 244 0322</Text>
        </Text>
        <Text style={[styles.text5, styles.email]}>
          Email :<Text style={[styles.text6]}> library@klescet.ac.in</Text>
        </Text>
        <Text style={[styles.text5, styles.email]}>
          For app related queries :
          <Text style={[styles.text6]}> libraryapp@klescet.ac.in</Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export default Info;

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
