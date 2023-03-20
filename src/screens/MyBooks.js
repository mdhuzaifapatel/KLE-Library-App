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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ProfitIndicator} from '../components';
import {scale} from 'react-native-size-matters';
import {AuthContext} from '../context/AuthContext';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const MyBooks = ({navigation}) => {
  // Data fetch
  const {userInfo} = useContext(AuthContext);
  const data = userInfo.GetPatronInfo;
  let books = null;
  let noOfBooks = 0;
  try {
    if (data.loans) {
      noOfBooks = JSON.stringify(Object.keys(data.loans[0].loan).length);
    }
  } catch (e) {}

  // Books data
  books = data.loans[0].loan;

  // Capitalise
  function capitalizeString(str) {
    return str.toLowerCase().replace(/\b\w/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1);
    });
  }

  const renderItem = ({item}) => {
    // const title = capitalizeString(...item.title);
    return (
      <View
        style={{
          alignSelf: 'center',
          position: 'relative',
          flexDirection: 'column',
          height: hp(18),
          width: wp(92),
          borderColor: Colors.mainLight,
          backgroundColor: Colors.mainLight,
          borderRadius: scale(15),
          // marginLeft: wp(2),
          marginTop: hp(1.8),
        }}>
        {/* Title and Icon */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{height: hp(4.5), width: wp(15), left: wp(1), top: hp(1.5)}}
            source={require('../assets/images/book.png')}
            resizeMode="contain"
          />
          <Text
            adjustsFontSizeToFit={true}
            minimumFontScale={0.5}
            style={{
              textAlign: 'left',
              top: hp(1.3),
              fontFamily: 'BreezeSans-Bold',
              color: Colors.font,
              fontSize: responsiveFontSize(1.9),
              marginLeft: wp(2),
              marginRight: wp(15),
            }}>
            {item.title}
          </Text>
        </View>

        {/* coin and price indicator */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            top: hp(3),
          }}>
          {/* Coin Price */}

          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontFamily: 'BreezeSans-Bold',
                color: Colors.font2,
                fontSize: responsiveFontSize(2),
                right: wp(3),
                top: hp(0.7),
                marginBottom: scale(-5),
              }}>
              {item.itype == 'LEN_BK' ? 'Lending Library' : 'Central Library'}
            </Text>
            <View style={{top: hp(0.4), left: wp(4)}}>
              <Text
                style={{
                  fontFamily: 'BreezeSans-Bold',
                  color: '#333',
                  fontSize: scale(11.5),
                }}>
                Due date: {item.onloan}
              </Text>
              <Text
                style={{
                  fontFamily: 'BreezeSans-Bold',
                  color: '#333',
                  fontSize: scale(11.5),
                }}>
                Issue date: {item.datelastborrowed}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
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
              name="bookshelf"
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
            Current Books
          </Text>
        </View>

        {/* Books List */}
        {noOfBooks > 0 ? (
          <View
            style={{
              flex: 2.5,
              backgroundColor: '#fff',
              marginTop: scale(-20),
              marginBottom: scale(6),
            }}>
            <FlatList
              style={{}}
              data={books}
              keyExtractor={item => item.issue_id}
              renderItem={renderItem}
              // horizontal={true}
            />
          </View>
        ) : (
          <View
            style={{
              flex: 2.5,
              backgroundColor: '#fff',
              marginTop: scale(-20),
              marginBottom: scale(6),
            }}>
            <Image
              source={require('../assets/images/noBooks.png')}
              style={styles.image}
            />
            <View style={styles.container2}>
              <Text style={styles.text1}>No books issued</Text>
              <Text style={styles.text2}>
                You can visit Central Library or Lending Library to get books
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default MyBooks;

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
});
