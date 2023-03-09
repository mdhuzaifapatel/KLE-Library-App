import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import { Home, Profile, Search } from '../screens';
import Info from '../screens/Info';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export default function AppStack() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer{...props}/>} screenOptions={{
      headerShown: false,
      drawerActiveBackgroundColor: '#aa18ea',
      drawerActiveTintColor: '#fff',
      drawerInactiveTintColor: '#333',
      drawerLabelStyle: {
        marginLeft: -25,
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
      },   }}>
      {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
      {/* <Stack.Screen name="Onboarding" component={Onboarding} /> */}

      {/* <Stack.Screen name="Splash" component={Splash} /> */}
      <Drawer.Screen name="Home" component={Home} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }} />
      <Drawer.Screen name="Search" component={Search} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="search-outline" size={22} color={color} />
          ),
        }} />
      <Drawer.Screen name="Profile" component={Profile} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}/>
      <Drawer.Screen name="Info" component={Info} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="information-circle-outline" size={22} color={color} />
          ),
        }}/>
      {/* <Stack.Screen name="Home" component={Home} /> */}
      {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
