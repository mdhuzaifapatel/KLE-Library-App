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

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../constants';
import Developers from '../screens/Developers';
import {AuthContext} from '../context/AuthContext';
import {useNavigation} from '@react-navigation/native';

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
          style={{padding: 20}}>
          <Image
            source={require('../assets/images/profile.png')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
            resizeMode="contain"
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'BreezeSans-Bold',
              marginBottom: 5,
            }}>
            Ashutosh Atnoor
          </Text>

          <View style={{flexDirection: 'row'}}>
            <Icon
              name="school"
              size={14}
              color="#fff"
              style={{marginRight: 10}}
            />
            <Text
              style={{
                color: '#fff',
                fontFamily: 'BreezeSans-Bold',
                marginRight: 5,
              }}>
              STUDENT
            </Text>
          </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Developers');
          }}
          style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="code-tags" size={22} color={Colors.font} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'BreezeSans-Bold',
                marginLeft: 5,
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
          style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="logout" size={22} color={Colors.font} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'BreezeSans-Bold',
                marginLeft: 5,
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
