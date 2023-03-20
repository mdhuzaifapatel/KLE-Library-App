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

const ReadingHistory = ({navigation}) => {
  const {userInfo} = useContext(AuthContext);
  const data = userInfo.GetPatronInfo;
  let books = null;
  let noOfBooks = 0;
  try {
    if (data.loans) {
      noOfBooks = JSON.stringify(Object.keys(data.fines[0].fine).length);
    }
  } catch (e) {}

  // Books data
  books = data.fines[0].fine;

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
              name="history"
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
            Reading History
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
              keyExtractor={(item, index) => String(index)}
              renderItem={({item}) =>
                item.amount > 0 ? (
                  <View
                    style={{
                      position: 'relative',
                      flexDirection: 'column',
                      height: scale(105),
                      width: scale(315),
                      borderWidth: scale(1),
                      borderColor: '#ddd',
                      backgroundColor: Colors.mainLight,
                      borderRadius: scale(15),
                      marginLeft: scale(19),
                      marginTop: scale(10),
                    }}>
                    {/* Coin and symbol */}
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: scale(10),
                        paddingTop: scale(10),
                      }}>
                      {/* <Image */}
                      {/* style={{height: scale(35), width: scale(30)}} */}
                      {/* // source={item.image} */}
                      {/* /> */}

                      <Text
                        style={{
                          fontFamily: 'BreezeSans-Bold',
                          color: '#333',
                          fontSize: scale(15),
                        }}>
                        {item.description}
                      </Text>
                    </View>

                    {/* coin and price indicator */}
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: scale(15),
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        marginTop: scale(5),
                      }}>
                      {/* Coin Price */}

                      <View style={{flexDirection: 'column'}}>
                        <Text
                          style={{
                            fontFamily: 'BreezeSans-Bold',
                            color: '#333',
                            fontSize: responsiveFontSize(2),

                            marginBottom: scale(-5),
                          }}>
                          {item.status}
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'BreezeSans-Bold',
                            color: '#333',
                            fontSize: scale(11.5),
                          }}>
                          Fine:{' '}
                          {item.amountoutstanding > 0
                            ? item.amountoutstanding
                            : '0'}
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'BreezeSans-Bold',
                            color: '#333',
                            fontSize: scale(11.5),
                          }}>
                          Return date: {item.date}
                        </Text>
                      </View>

                      {/* indicator */}
                      {/* <ProfitIndicator
                    type={item.type}
                    percentage_change={item.changes}
                  /> */}
                    </View>
                  </View>
                ) : null
              }
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
export default ReadingHistory;

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
