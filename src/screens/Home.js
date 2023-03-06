import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Search, Dashboard, Welcome, Profile} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../constants';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          marginTop: '2%',
          height: 55,
          ...styles.shadow,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Icon
                name={focused ? 'home' : 'home-outline'}
                size={23}
                color={focused ? '#fff' : '#ffffff80'}
              />
              <Text
                style={{
                  color: focused ? '#fff' : '#ffffff80',
                  fontFamily: 'Roboto-Bold',
                  fontSize: 10,
                }}>
                Dashboard
              </Text>
            </View>
          ),
        }}
        name="moon"
        component={Dashboard}
      />

<Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name={focused ? 'search' : 'search-outline'}
                size={23}
                color={focused ? '#fff' : '#ffffff80'}
              />
              <Text
                style={{
                  color: focused ? '#fff' : '#ffffff80',
                  fontSize: 10,
                  fontFamily: 'Roboto-Bold',
                }}>
                Search
              </Text>
            </View>
          ),
        }}
        name="Search"
        component={Search}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Icon
                name={focused ? 'grid' : 'grid-outline'}
                size={23}
                color={focused ? '#fff' : '#ffffff80'}
                
              />
              <Text
                style={{
                  color: focused ? '#fff' : '#ffffff80',
                  fontFamily: 'Roboto-Bold',
                  fontSize: 10,
                }}>
                Menu
              </Text>
            </View>
          ),
        }}
        name="menu"
        component={Welcome}
      />

      
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Icon
                name={focused ? 'person' : 'person-outline'}
                size={23}
                color={focused ? '#fff' : '#ffffff80'}
              />
              <Text
                style={{
                  color: focused ? '#fff' : '#ffffff80',
                  fontFamily: 'Roboto-Bold',
                  fontSize: 10,
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Icon
                name={focused ? 'information-circle' : 'information-circle-outline'}
                size={22}
                color={focused ? '#fff' : '#ffffff80'}
              />
              <Text
                style={{
                  color: focused ? '#fff' : '#ffffff80',
                  fontFamily: 'Roboto-Bold',
                  fontSize: 10,
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
    elevation: 5,
    shadowColor: '#000',
    backgroundColor:'#2249D6',
    borderWidth: 1,
    borderColor: 'transparent',
  },
});
