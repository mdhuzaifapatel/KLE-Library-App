import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Touchable,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {dummyData} from '../constants';
import {ProfitIndicator, ActionCenter} from '../components';

const Dashboard = () => {
  return (
    <View style={{flex: 1}}>
      {/* Statusbar */}
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />
      {/* Header section */}
      <LinearGradient
        start={{x: 15, y: 1}}
        end={{x: 1, y: 15}}
        location={[0, 1]}
        // colors={['#266df0','#2D97DA' , '#177CEB']}
        colors={['#84dcf4', '#0090cd']}
        // colors={['#c3f8c4', '#c9f8ce']}
        // colors={['#BC2C2C', '#e05553', '#f76a68']}
        style={{flex: 1.2, flexDirection: 'column'}}>
        <View
          style={{
            flexDirection: 'column',
            marginTop: hp('9.2%'),
            paddingHorizontal: wp('5.5%'),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}>
            {/* ome message and name */}
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  fontFamily: 'OpenSans-SemiBoldItalic',
                  fontSize: hp('2.5%'),
                  color: '#002c62',
                }}>
                Welcome Back
              </Text>
              <Text
                style={{
                  // fontFamily: 'OpenSans-Bold',
                  fontFamily: 'BreezeSans-Bold',
                  color: '#002c62',
                  fontSize: hp('3.15%'),
                }}>
                ASHUTOSH ATNOOR
              </Text>
            </View>

            {/* Bell icon and profile pic */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                margin: wp('1.35%'),
              }}>
              <Icon name="bell" size={wp('5.5%')} color="#000" />
              {/* <Image
                source={require('../assets/images/avatar.jpg')}
                resizeMode="cover"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  marginLeft: 15,
                }}
              /> */}
            </View>
          </View>

          {/* amount  */}
          {/* <View
            style={{
              flexDirection: 'row',
              marginTop: 25,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}> */}
          {/* Amount */}
          {/* <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 28,
                  fontFamily: 'Roboto-Bold',
                }}>
                $32,7456.68
              </Text>
              <Text
                style={{
                  color: 'rgba(255,255,255,0.3)',
                  fontFamily: 'Roboto-Regular-Italic',
                  fontSize: 14,
                }}>
                Updated 2 mins ago
              </Text>
            </View> */}

          {/* profit loss indicator */}
          {/* <ProfitIndicator
              type="I"
              percentage_change={dummyData.portfolio.changes}
            />
          </View> */}
        </View>
      </LinearGradient>

      {/* Body section */}
      <View
        style={{
          flex: 2.5,
          backgroundColor: '#fff',
          paddingHorizontal: wp('5%'),
        }}>
        {/* Profile Card */}
        <LinearGradient
          start={{x: 0.0, y: 0.1}}
          end={{x: 1, y: 1.0}}
          location={[1, 0]}
          // colors={['#7881dc', '#b7bef2', '#7881dc', '#7881dc']}
          colors={[
            '#002c62',
            // '#00397c',
            // '#005a99',
            // '#2aa8d9',
            // '#0090cd',

            // '#2aa8d9',
            // '#2aa8d9',
            // '#2aa8d9',
            // '#2aa8d9',
            // '#2aa8d9',
            // '#2aa8d9',
            // '#2aa8d9',
            // '#2aa8d9',
            // '#0090cd',
            // '#156da5',
            // '#005a99',
            // '#00397c',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#002c62',
          ]}
          // colors={['#7881dc', '#9ba6f6', '#b7bef2', '#7881dc']}
          // colors={['#8cf093', '#a0e8a8', '#a0e8a8']}
          // colors={['#BC2C2C', '#e05553', '#f76a68']}
          style={{
            flexDirection: 'row',
            height: hp('25%'),
            width: wp('90%'),
            alignItems: 'center',
            justifyContent: 'space-around',
            borderRadius: wp('4%'),
            borderWidth: wp('0.09%'),
            borderColor: '#00397c',
            elevation: hp('2.5%'),
            shadowColor: '#000',
            shadowRadius: wp('1%'),
            marginTop: hp('-13.4%'),
          }}>
          <View style={{marginTop: hp('2.75%')}}>
            <View
              style={{
                // width: '55%',
                flex: 1,
                width: wp('15%'),
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: wp('14.5%'),
                // marginTop: hp(8.4),
                // marginBottom: hp(5.2),
                // marginLeft: wp(10),
              }}>
              <Image
                style={{
                  height: hp('21%'),
                  width: wp('33%'),
                  borderRadius: wp('3%'),
                  borderColor: '#00397c',
                  borderWidth: wp('0.09%'),
                }}
                resizeMode="cover"
                source={require('../assets/images/profile.png')}
              />
            </View>
            {/* <ActionCenter */}
            {/* img_src={require('../assets/images/profile.png')} */}
            {/* // img_text="WithDraw" */}
            {/* /> */}

            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                width: wp('60%'),
                marginLeft: wp('51%'),
                marginTop: hp('-19.5%'),
              }}>
              {/* USN */}
              <Text
                style={{
                  marginTop: hp('-2%'),
                  fontSize: hp('4%'),
                  fontFamily: 'OpenSans-Bold',
                  color: '#00397c',
                  // textShadowColor: '#002c62',
                  textShadowOffset: {width: 1, height: 1},
                  textShadowRadius: 7,
                  paddingBottom: hp('0.5%'),
                }}>
                2KL19EC016
              </Text>

              {/* course */}
              <Text
                style={{
                  fontSize: hp('2.2%'),
                  fontFamily: 'OpenSans-Medium',
                  // textShadowColor: '#002c62',
                  color: '#00397c',
                  textShadowRadius: wp('2.2%'),
                }}>
                <Text
                  style={{
                    fontSize: hp('2.2%'),
                    fontFamily: 'OpenSans-Bold',
                    // textShadowColor: '#002c62',
                    color: '#00397c',
                    textShadowRadius: wp('2.2%'),
                  }}>
                  Course:{' '}
                </Text>{' '}
                B.E
              </Text>

              {/* branch */}
              <Text
                style={{
                  fontSize: hp(2.2),
                  fontFamily: 'OpenSans-Medium',
                  // textShadowColor: '#002c62',
                  color: '#00397c',
                  textShadowRadius: 5,
                }}>
                <Text
                  style={{
                    fontSize: hp('2.2%'),
                    fontFamily: 'OpenSans-Bold',
                    textShadowColor: '#002c62',
                    // textShadowColor: '#002c62',
                    color: '#00397c',
                  }}>
                  Branch:{' '}
                </Text>{' '}
                EC
              </Text>

              {/* DOB */}
              <Text
                style={{
                  fontSize: hp('2.2%'),
                  fontFamily: 'OpenSans-Medium',
                  // textShadowColor: '#002c62',
                  color: '#00397c',
                  textShadowRadius: 5,
                }}>
                <Text
                  style={{
                    fontSize: hp('2.2%'),
                    fontFamily: 'OpenSans-Bold',
                    // textShadowColor: '#002c62',
                    color: '#00397c',
                    textShadowRadius: 5,
                  }}>
                  D.O.B:{' '}
                </Text>{' '}
                29/07/2001
              </Text>

              {/* No. Books issued */}
              <Text
                style={{
                  fontSize: hp('2.2%'),
                  marginTop: hp('1.2%'),
                  fontFamily: 'OpenSans-Medium',
                  // textShadowColor: '#002c62',
                  color: '#00397c',
                  textShadowRadius: 5,
                }}>
                <Text
                  style={{
                    fontSize: hp('2.2%'),
                    fontFamily: 'OpenSans-Bold',

                    // textShadowColor: '#002c62',
                    color: '#00397c',
                    textShadowRadius: 5,
                  }}>
                  Books issued:{' '}
                </Text>{' '}
                5
              </Text>

              {/* Fine */}
              <Text
                style={{
                  fontSize: hp('2.2%'),
                  fontFamily: 'OpenSans-Medium',
                  // textShadowColor: '#002c62',
                  color: '#00397c',
                  textShadowRadius: 5,
                }}>
                <Text
                  style={{
                    fontSize: hp('2.2%'),
                    fontFamily: 'OpenSans-Bold',
                    // textShadowColor: '#002c62',
                    color: '#00397c',

                    textShadowRadius: 5,
                  }}>
                  Fine amount:{' '}
                </Text>{' '}
                ₹50.54
              </Text>
            </View>
          </View>
        </LinearGradient>

        {/* My Books */}
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            marginTop: hp('1.5%'),
          }}>
          {/* market text */}
          <Text
            style={{
              fontFamily: 'OpenSans-Bold',
              fontSize: hp('2.5%'),
              color: '#002c62',
              margin: hp('1%'),
            }}>
            My Books
          </Text>

          {/* books list */}
          <FlatList
            keyExtractor={item => item.id}
            data={dummyData.coins}
            renderItem={({item}) => (
              <View
                style={{
                  flexDirection: 'row',
                  height: hp('10%'),
                  width: wp('90%'),
                  borderWidth: wp('0.4%'),
                  borderColor: '#ddd',
                  borderRadius: wp('4%'),
                  justifyContent: 'space-between',
                  padding: wp('1%'),
                  marginBottom: hp('0.8%'),
                }}>
                {/* Coin image ,coin name and symbol */}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {/* Coin image */}
                  <Image
                    style={{
                      height: hp('7%'),
                      marginLeft: wp('-0.1%'),
                    }}
                    resizeMode="contain"
                    source={item.image}
                  />

                  {/* Coin symbol */}
                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'BreezeSans-Bold',
                        color: '#002c62',
                        fontSize: hp('2.1%'),
                      }}>
                      {item.currency}
                    </Text>
                    <Text
                      style={{
                        marginTop: 1,
                        fontFamily: 'OpenSans-Medium',
                        color: '#002c62',
                        fontSize: hp('1.67%'),
                      }}>
                      Due date: 27 March 2023
                    </Text>
                  </View>
                </View>

                {/* Coin price and indicator */}
                <View
                  style={{
                    flexDirection: 'column',
                    // backgroundColor: '#fff',
                    alignContent: 'center',
                    justifyContent: 'center',
                    marginRight: wp('2.5%'),
                  }}>
                  {/* price */}
                  <Text
                    style={{
                      fontSize: hp('2%'),
                      // color: item.type == 'I' ? 'green' : 'red',
                      color: '#002c62',
                      fontFamily: 'OpenSans-Bold',
                    }}>
                    ₹{item.amount}
                  </Text>

                  {/* indicator */}
                  {/* <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}> */}

                  {/* <Text
                      style={{
                        color: item.type == 'I' ? 'green' : 'red',
                        fontFamily: 'Roboto-Bold',
                        fontSize: 12,
                      }}>
                      {item.changes}
                    </Text> */}

                  {/* <Icon
                      name={
                        item.type == 'I'
                          ? 'chevron-circle-up'
                          : 'chevron-circle-down'
                      }
                      color={item.type == 'I' ? 'green' : 'red'}
                    /> */}
                  {/* </View> */}
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
