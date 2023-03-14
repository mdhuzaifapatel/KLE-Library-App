import React, {useContext} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../constants';
import {AuthContext} from '../context/AuthContext';
import {useNavigation} from '@react-navigation/native';
import {scale} from 'react-native-size-matters';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const CustomDrawer = ({...props}) => {
  const navigation = useNavigation();
  const {logout} = useContext(AuthContext);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: Colors.main}}>
        <ImageBackground
          source={require('../assets/images/drawerImage.png')}
          style={{padding: wp(5)}}>
          <Image
            source={require('../assets/images/profile.png')}
            style={{
              height: wp(25),
              width: wp(25),
              borderRadius: wp(15),
              marginBottom: hp(1),
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              color: '#fff',
              fontSize: responsiveFontSize(2),
              fontFamily: 'BreezeSans-Bold',
              marginBottom: hp(0.5),
            }}>
            Ashutosh Atnoor
          </Text>

          <View style={{flexDirection: 'row'}}>
            <Icon
              name="school"
              size={wp(4.5)}
              color="#fff"
              style={{marginRight: wp(2)}}
            />
            <Text
              style={{
                color: '#fff',
                fontFamily: 'BreezeSans-Bold',
                // marginRight: scale(15),
              }}>
              STUDENT
            </Text>
          </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: hp(1)}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View
        style={{
          paddingLeft: wp(4),
          paddingTop: hp(1),
          borderTopWidth: scale(0.6),
          borderTopColor: Colors.font,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Developers');
          }}
          style={{paddingVertical: hp(1)}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicon name="code-slash" size={wp(5.5)} color={Colors.font} />
            <Text
              style={{
                fontSize: responsiveFontSize(1.9),
                fontFamily: 'BreezeSans-Bold',
                marginLeft: wp(1.2),
                color: Colors.font,
              }}>
              Developers
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
          style={{paddingVertical: hp(2)}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="logout" size={wp(5)} color={Colors.font} />
            <Text
              style={{
                fontSize: responsiveFontSize(1.9),
                fontFamily: 'BreezeSans-Bold',
                marginLeft: wp(1.2),
                color: Colors.font,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
