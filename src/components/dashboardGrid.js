import {StyleSheet, Text, View, ScrollView, Linking} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {FlatGrid} from 'react-native-super-grid';
import {scale} from 'react-native-size-matters';
import {Colors} from '../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import {QP_URL} from '../utils/config';

const DashboardGrid = () => {
  const [items, setItems] = React.useState([
    {
      name: 'SEARCH',
      code: Colors.mainLight,
      route: 'Search',
      icon: 'book-search-outline',
    },
    {
      name: 'PROFILE',
      code: Colors.mainLight,
      route: 'Profile',
      icon: 'account-circle-outline',
    },
    {name: 'FINE', code: Colors.mainLight, route: 'Fine', icon: 'currency-inr'},
    {
      name: 'QUESTION PAPERS',
      code: Colors.mainLight,

      icon: 'newspaper',
    },
    {
      name: 'CURRENT BOOKS',
      code: Colors.mainLight,
      route: 'MyBooks',
      icon: 'bookshelf',
    },
    {
      name: 'READING HISTORY',
      code: Colors.mainLight,
      route: 'ReadingHistory',
      icon: 'history',
    },

    {
      name: 'DEVELOPERS',
      code: Colors.mainLight,
      route: 'Developers',
      icon: 'code-tags',
    },
    {
      name: 'CONTACT US',
      code: Colors.mainLight,
      route: 'Contact',
      icon: 'cellphone-basic',
    },
    {
      name: 'ABOUT              LIBRARY',
      code: Colors.mainLight,
      route: 'Info',
      icon: 'information-outline',
    },
  ]);

  const navigation = useNavigation();
  return (
    <FlatGrid
      itemDimension={wp(25)}
      data={items}
      style={styles.gridView}
      //   staticDimension={300}
      // fixed
      spacing={scale(11)}
      renderItem={({item}) => (
        <ScrollView>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              if (item.name == 'QUESTION PAPERS') {
                Linking.openURL(QP_URL);
              } else {
                navigation.navigate(item.route);
              }
            }}>
            <View style={[styles.itemContainer, {backgroundColor: item.code}]}>
              <Icon
                name={item.icon}
                size={25}
                color={Colors.font}
                style={styles.Icon}
              />
              <Text style={styles.itemName}>{item.name}</Text>

              {/* <Text style={styles.itemCode}>{item.code}</Text> */}
            </View>
          </TouchableOpacity>
        </ScrollView>
      )}
    />
  );
};

export default DashboardGrid;

const styles = StyleSheet.create({
  gridView: {
    position: 'absolute',
    bottom: scale(50),
    flex: 1,
    margin: scale(3),
  },
  itemContainer: {
    width: scale(-100),
    justifyContent: 'center',
    borderRadius: 5,
    padding: scale(5),
    height: hp(13.8),
    borderColor: Colors.main,
    borderWidth: scale(0.5),
  },
  itemName: {
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'BreezeSans-Bold',
    color: Colors.font,
    fontWeight: '600',
    textAlign: 'center',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: scale(10),
    color: Colors.font,
    textAlign: 'center',
  },
  Icon: {
    padding: scale(3),
    textAlign: 'center',
  },
});
