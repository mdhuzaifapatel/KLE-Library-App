import React from 'react';
import {StyleSheet, Text, View, Touchable} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Search, Dashboard, Welcome, Profile, CustomDrawer} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../constants';


import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Tab = createBottomTabNavigator();

const Home = ({navigation}) => {
  return (
    // Bottom Tab

    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          marginTop: hp('2%'),
          height: hp('6.2%'),
          ...styles.shadow,
        },
        tabBarShowLabel: false,
      }}>
      {/* Home Button */}
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Icon
                name={focused ? 'home' : 'home-outline'}
                size={wp('5%')}
                color={focused ? '#002757' : '#00709c'}
              />
              <Text
                style={{
                  color: focused ? '#002757' : '#00709c',
                  fontFamily: 'BreezeSans-Medium_20150728',
                  fontSize: wp('2.5%'),
                }}>
                Dashboard
              </Text>
            </View>
          ),
        }}
        name="moon"
        component={Dashboard}
      />

      {/* Search Button */}
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name={focused ? 'search' : 'search-outline'}
                size={wp('5%')}
                color={focused ? '#002757' : '#00709c'}
              />
              <Text
                style={{
                  color: focused ? '#002757' : '#00709c',
                  fontSize: wp('2.5%'),

                  fontFamily: 'BreezeSans-Medium_20150728',
                }}>
                Search
              </Text>
            </View>
          ),
        }}
        name="Search"
        component={Search}
      />

      {/* Menu Button */}
      
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Icon
                name={focused ? 'grid' : 'grid-outline'}
                size={wp('5%')}
                color={focused ? '#002757' : '#00709c'}
              />
              <Text
                style={{
                  color: focused ? '#002757' : '#00709c',
                  fontFamily: 'BreezeSans-Medium_20150728',
                  fontSize: wp('2.5%'),
                }}>
                Menu
              </Text>
            </View>
          ),
        }} 
        name="menu"
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.openDrawer();
          }
        })}
        component={CustomDrawer}
        
      />
      
      

      {/* Profile Button */}
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Icon
                name={focused ? 'person' : 'person-outline'}
                size={wp('5%')}
                color={focused ? '#002757' : '#00709c'}
              />
              <Text
                style={{
                  color: focused ? '#002757' : '#00709c',
                  fontFamily: 'BreezeSans-Medium_20150728',
                  fontSize: wp('2.5%'),
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
        name="Profile"
        component={Profile}
      />

      {/* Info Button */}
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Icon
                name={
                  focused ? 'information-circle' : 'information-circle-outline'
                }
                size={wp('5%')}
                color={focused ? '#002757' : '#00709c'}
              />
              <Text
                style={{
                  color: focused ? '#002757' : '#00709c',
                  fontFamily: 'BreezeSans-Medium_20150728',
                  fontSize: wp('2.5%'),
                }}>
                Info
              </Text>
            </View>
          ),
        }}
        name="info"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  shadow: {
    elevation: hp('1.5%'),
    shadowColor: '#000',
    backgroundColor: '#2aa8d9',
    borderWidth: wp('0.5%'),
    borderColor: 'transparent',
  },
});
