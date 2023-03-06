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
        start={{x: 0.0, y: 0.4}}
        end={{x: 0.5, y: 1.0}}
        location={[0, 1]}
        // colors={['#266df0','#2D97DA' , '#177CEB']}
        colors={['#2D97DA', '#2249D6']}
        // colors={['#BC2C2C', '#e05553', '#f76a68']}
        style={{flex: 1.2, flexDirection: 'column'}}>
        <View
          style={{
            flexDirection: 'column',
            marginTop: hp('9%'),
            paddingHorizontal: '5%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}>
            {/* Welcome message and name */}
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  fontFamily: 'BreezeSans-Medium_20150728',
                  fontSize: 20,
                  color: '#fff',
                }}>
                Welcome Back
              </Text>
              <Text
                style={{
                  fontFamily: 'BreezeSans-Bold',
                  color: '#fff',
                  fontSize: 22,
                }}>
                ASHUTOSH ATNOOR
              </Text>
            </View>

            {/* Bell icon and profile pic */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="bell" size={25} color="#fff" />
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
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            height: hp('25%'),
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-around',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'rgba(255,255,255,0.1)',
            elevation: 10,
            shadowColor: '#000',
            shadowRadius: 10,
            marginTop: -120,
          }}>
          <View
            style={{
              width: '55%',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image
              style={{height: 170, width: 130}}
              source={require('../assets/images/profile.png')}
            />
          </View>
          {/* <ActionCenter */}
          {/* img_src={require('../assets/images/profile.png')} */}
          {/* // img_text="WithDraw" */}
          {/* /> */}

          <View style={{width: wp('60%'), marginLeft: 20}}>
            {/* USN */}
            <Text
              style={{
                fontSize: 30,
                fontFamily: 'BreezeSans-Bold',
                color: '#333',
              }}>
              2KL19EC016
            </Text>

            {/* branch */}
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'BreezeSans-Medium_20150728',
                color: '#333',
              }}>
              B.E (Electronics & Communication)
            </Text>

            {/* No. Books issued */}
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'BreezeSans-Medium_20150728',
                color: '#333',
              }}>
              Books issued: 5
            </Text>

            {/* Fine */}
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'BreezeSans-Medium_20150728',
                color: '#333',
              }}>
              Fine: ₹50.54
            </Text>
          </View>
        </View>

        {/* My Books */}
        <View style={{flex: 1, flexDirection: 'column', marginTop: 20}}>
          {/* market text */}
          <Text
            style={{
              fontFamily: 'BreezeSans-Bold',
              fontSize: 22,
              color: '#333',
              margin: 10,
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
                  width: '100%',
                  borderWidth: 1,
                  borderColor: '#ddd',
                  borderRadius: 15,
                  justifyContent: 'space-between',
                  padding: 10,
                  marginBottom: 8,
                }}>
                {/* Coin image ,coin name and symbol */}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {/* Coin image */}
                  <Image
                    style={{height: '70%', marginLeft: -10}}
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
                        color: '#333',
                        fontSize: 17,
                      }}>
                      {item.currency}
                    </Text>
                    <Text
                      style={{
                        marginTop: 1,
                        fontFamily: 'BreezeSans-Regular',
                        color: '#333',
                        fontSize: 14,
                      }}>
                      Due date: 27 March 2023
                    </Text>
                  </View>
                </View>

                {/* Coin price and indicator */}
                <View
                  style={{
                    flexDirection: 'column',
                    backgroundColor: '#fff',
                    alignContent: 'center',
                    justifyContent: 'center',
                  }}>
                  {/* price */}
                  <Text
                    style={{
                      fontFamily: 'BreezeSans-Medium_20150728',
                      fontSize: 14,
                      color: item.type == 'I' ? 'green' : 'red',
                      fontFamily: 'BreezeSans-Bold',
                      fontSize: 15,
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
