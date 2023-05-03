import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomDrawer from '../components/CustomDrawer';
import {Home, Profile, Search} from '../screens';
import Info from '../screens/Info';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../constants';
import MyBooks from '../screens/CurrentBooks';
import Developers from '../screens/Developers';
import Fine from '../screens/Fine';
import ReadingHistory from '../screens/ReadingHistory';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Contact from '../screens/Links';
import ChangePassword from '../screens/ChangePassword';
import Notice from '../screens/Notice';
import { notificationListeners } from '../utils/notificationService';



function Root() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: Colors.main,
        drawerActiveTintColor: Colors.font,
        drawerInactiveTintColor: Colors.font,
        drawerLabelStyle: {
          marginLeft: wp(-5),
          fontFamily: 'BreezeSans-Bold',
          fontSize: responsiveFontSize(1.8),
        },
      }}>
      {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
      {/* <Stack.Screen name="Onboarding" component={Onboarding} /> */}

      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: () => (
            <Icon name="home" size={wp(5.5)} color={Colors.font} />
          ),
        }}
      />
      <Drawer.Screen
        name="Search"
        component={Search}
        options={{
          drawerIcon: () => (
            <Icon name="magnify-plus" size={wp(5.5)} color={Colors.font} />
          ),
        }}
      />

      <Drawer.Screen
        name="Current Books"
        component={MyBooks}
        options={{
          drawerIcon: () => (
            <Icon name="bookshelf" size={wp(5.5)} color={Colors.font} />
          ),
        }}
      />

      <Drawer.Screen
        name="Reading History"
        component={ReadingHistory}
        options={{
          drawerIcon: () => (
            <Icon name="history" size={wp(5.5)} color={Colors.font} />
          ),
        }}
      />
      <Drawer.Screen
        name="Fine"
        component={Fine}
        options={{
          drawerIcon: () => (
            <Icon name="currency-inr" size={wp(5.5)} color={Colors.font} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: () => (
            <Icon name="account" size={wp(5.5)} color={Colors.font} />
          ),
        }}
      />
      <Drawer.Screen
        name="Library Info"
        component={Info}
        options={{
          drawerIcon: () => (
            <Icon name="information" size={wp(5.5)} color={Colors.font} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function AppStack() {
  notificationListeners();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Root" component={Root} />
      <Stack.Screen name="Developers" component={Developers} />
      <Stack.Screen name="ReadingHistory" component={ReadingHistory} />
      <Stack.Screen name="MyBooks" component={MyBooks} />
      <Stack.Screen name="Info" component={Info} />
      <Stack.Screen name="Notice" component={Notice} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
}
export default AppStack;
