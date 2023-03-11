import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import {Dashboard, Home, Profile, Search} from '../screens';
import Info from '../screens/Info';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../constants';
import MyBooks from '../screens/MyBooks';
import {NavigationContainer} from '@react-navigation/native';
import {scale} from 'react-native-size-matters';
import Developers from '../screens/Developers';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default function AppStack() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: Colors.main,
        drawerActiveTintColor: Colors.font,
        drawerInactiveTintColor: Colors.font,
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'BreezeSans-Bold',
          fontSize: 15,
        },
      }}>
      {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
      {/* <Stack.Screen name="Onboarding" component={Onboarding} /> */}

      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: () => <Icon name="home" size={22} color={Colors.font} />,
        }}
      />
      <Drawer.Screen
        name="Search"
        component={Search}
        options={{
          drawerIcon: () => (
            <Icon name="magnify-plus" size={22} color={Colors.font} />
          ),
        }}
      />

      <Drawer.Screen
        name="My Books"
        component={MyBooks}
        options={{
          drawerIcon: () => (
            <Icon name="bookshelf" size={22} color={Colors.font} />
          ),
        }}
      />
      <Drawer.Screen
        name="Fine"
        component={Dashboard}
        options={{
          drawerIcon: () => (
            <Icon name="currency-inr" size={22} color={Colors.font} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: () => (
            <Icon name="account" size={22} color={Colors.font} />
          ),
        }}
      />
      <Drawer.Screen
        name="Library Info"
        component={Info}
        options={{
          drawerIcon: () => (
            <Icon name="information" size={22} color={Colors.font} />
          ),
        }}
      />

      <Drawer.Screen name="Developers" component={Developers} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
