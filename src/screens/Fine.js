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
import {scale} from 'react-native-size-matters';
import {AuthContext} from '../context/AuthContext';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const Fine = ({navigation}) => {
  const {userInfo} = useContext(AuthContext);
  const data = userInfo.GetPatronInfo;
  let noOfBooks = 0;
  try {
    if (data.loans) {
      noOfBooks = JSON.stringify(Object.keys(data.fines[0].fine).length);
    }
  } catch (e) {}

  // Books data (Fine)
  let books = data.fines[0].fine;

  console.log(books);

  const new_data = {fines: {fine: []}};
  books.forEach(fine => {
    if (fine.amountoutstanding && parseFloat(fine.amountoutstanding) > 0) {
      new_data.fines.fine.push(fine);
    }
  });

  let booksData = new_data.fines.fine;

  // Date format
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' + day : day}-${
      month < 10 ? '0' + month : month
    }-${year}`;
  }

  const renderItem = ({item}) => {
    const name = item.description
      .toString()
      .match(/[a-zA-Z]+/g)
      .join(' ');
    let date = item.date.toString().split(' ')[0];
    let dateString = item.description.toString();
    let dueDate = date;
    try {
      dueDate = dateString.match(/\d{4}-\d{2}-\d{2}/)[0];
    } catch (e) {}

    return item.amount > 0 ? (
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
            {name}
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
          <View style={{flexDirection: 'row'}}>
            {item.status == 'RETURNED' ? (
              <Text
                style={{
                  fontFamily: 'BreezeSans-Bold',
                  color: Colors.font2,
                  fontSize: responsiveFontSize(2),
                  right: wp(3),
                  top: hp(1),
                  marginBottom: scale(-5),
                }}>
                RETURNED
              </Text>
            ) : (
              <Text
                style={{
                  fontFamily: 'BreezeSans-Bold',
                  color: Colors.red,
                  fontSize: responsiveFontSize(2),
                  right: wp(3),
                  top: hp(1),
                  marginBottom: scale(-5),
                }}>
                UNRETURNED
              </Text>
            )}

            <View style={{top: hp(0.4), left: wp(4)}}>
              <Text
                style={[
                  item.amountoutstanding > 0 ? styles.red : styles.normal,
                ]}>
                Fine:{' '}
                {item.amountoutstanding > 0 ? item.amountoutstanding : '0'}
              </Text>

              <Text
                style={{
                  fontFamily: 'BreezeSans-Bold',
                  color: '#333',
                  fontSize: scale(11.5),
                }}>
                Due date: {formatDate(dueDate)}
              </Text>

              <Text
                style={{
                  fontFamily: 'BreezeSans-Bold',
                  color: '#333',
                  fontSize: scale(11.5),
                }}>
                Return date: {formatDate(date)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    ) : null;
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
              name="currency-inr"
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
              right: scale(63),
              textAlign: 'center',
              fontFamily: 'BreezeSans-Bold',
              fontSize: scale(17),
              color: Colors.font,
            }}>
            Fines
          </Text>
        </View>

        {/* Books List */}
        {booksData > [] ? (
          <View
            style={{
              flex: 2.5,
              backgroundColor: '#fff',
              marginTop: scale(-20),
              marginBottom: scale(6),
            }}>
            <FlatList
              style={{}}
              data={booksData}
              keyExtractor={(item, index) => String(index)}
              renderItem={renderItem}
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
              <Text style={styles.text1}>You have no fines!</Text>
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
export default Fine;

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
  normal: {
    fontFamily: 'BreezeSans-Bold',
    color: '#333',
    fontSize: scale(11.5),
  },
  red: {
    fontFamily: 'BreezeSans-Bold',
    color: Colors.red,
    fontSize: scale(11.5),
    paddingBottom: hp(0.2),
  },
});
