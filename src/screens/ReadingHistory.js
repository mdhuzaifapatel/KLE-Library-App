import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {Colors, dummyData} from '../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ProfitIndicator} from '../components';
import {scale} from 'react-native-size-matters';

const ReadingHistory = ({navigation}) => {
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
        <View
          style={{
            flex: 2.5,
            backgroundColor: '#fff',
            marginTop: scale(-20),
            marginBottom: scale(6),
          }}>
          {/* Copying horizontal flatlist from dashboard */}
          <FlatList
            style={{}}
            keyExtractor={item => item.id}
            data={dummyData.coins}
            renderItem={({item}) => (
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
                  <Image
                    style={{height: scale(35), width: scale(30)}}
                    source={item.image}
                  />
                  <Text
                    style={{
                      fontFamily: 'BreezeSans-Bold',
                      color: '#333',
                      fontSize: scale(15),
                    }}>
                    {' '}
                    {item.currency}
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
                        fontSize: scale(18),

                        marginBottom: scale(-5),
                      }}>
                      {' '}
                      ₹{item.amount}
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'BreezeSans-Bold',
                        color: '#333',
                        fontSize: scale(11.5),
                      }}>
                      Due Date: 27 March 2023
                    </Text>
                  </View>

                  {/* indicator */}
                  <ProfitIndicator
                    type={item.type}
                    percentage_change={item.changes}
                  />
                </View>
              </View>
            )}
            // horizontal={true}
          />
        </View>
      </View>
    </View>
  );
};
export default ReadingHistory;
