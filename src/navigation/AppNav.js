import {View, Text, ActivityIndicator} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {AuthContext} from '../context/AuthContext';
import {Colors} from '../constants';
import {scale} from 'react-native-size-matters';
import navigationService from '../utils/navigationService';

function AppNav() {
  const {isLoading, userToken} = useContext(AuthContext);
  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.white,
        }}>
        <ActivityIndicator
          size={scale(30)}
          color={Colors.font}
          style={{
            padding: 12,
            backgroundColor: Colors.mainLight,
            borderRadius: 12,
          }}
        />
        <Text
          style={{
            color: Colors.font,
            fontFamily: 'BreezeSans-Bold',
            fontSize: scale(20),
          }}>
          Loading...
        </Text>
      </View>
    );
  }
  return (
    <NavigationContainer
      ref={ref => navigationService.setTopLevelNavigator(ref)}>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default AppNav;
