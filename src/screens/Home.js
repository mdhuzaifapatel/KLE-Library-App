import React from 'react';
import {StyleSheet, Text, View, Touchable} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Search, Dashboard, Profile} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../constants';
import Info from './Info';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MyBooks from './MyBooks';
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
                color={focused ? Colors.font : '#002c6280'}
              />
              <Text
                style={{
                  color: focused ? Colors.font : '#002c6280',
                  ...styles.bottomIcons,
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
                color={focused ? Colors.font : '#002c6280'}
              />
              <Text
                style={{
                  color: focused ? Colors.font : '#002c6280',
                  ...styles.bottomIcons,
                }}>
                Search
              </Text>
            </View>
          ),
        }}
        name="Search"
        component={Search}
      />

      {/* My Books */}

      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Icon
                name={focused ? 'book' : 'book-outline'}
                size={wp('5%')}
                color={focused ? Colors.font : '#002c6280'}
              />
              <Text
                style={{
                  color: focused ? Colors.font : '#002c6280',
                  ...styles.bottomIcons,
                }}>
                My Books
              </Text>
            </View>
          ),
        }}
        name="myBooks"
        // listeners={({navigation}) => ({
        //   tabPress: e => {
        //     e.preventDefault();
        //     navigation.navigate('Search');
        //   },
        // })}
        component={MyBooks}
      />

      {/* Profile Button */}
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Icon
                name={focused ? 'person' : 'person-outline'}
                size={wp('5%')}
                color={focused ? Colors.font : '#002c6280'}
              />
              <Text
                style={{
                  color: focused ? Colors.font : '#002c6280',
                  ...styles.bottomIcons,
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
                color={focused ? Colors.font : '#002c6280'}
              />
              <Text
                style={{
                  color: focused ? Colors.font : '#002c6280',
                  ...styles.bottomIcons,
                }}>
                Info
              </Text>
            </View>
          ),
        }}
        name="Info"
        component={Info}
      />
    </Tab.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  shadow: {
    elevation: hp('1.5%'),
    shadowColor: Colors.main,
    backgroundColor: Colors.main,
    borderWidth: wp('0.5%'),
    borderColor: 'transparent',
  },
  bottomIcons: {
    fontFamily: 'BreezeSans-Medium_20150728',
    fontSize: wp('2.5%'),
  },
});
