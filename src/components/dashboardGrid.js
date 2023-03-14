import {
  StyleSheet,
  Button,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
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

const DashboardGrid = () => {
  const [items, setItems] = React.useState([
    {name: 'SEARCH', code: Colors.mainLight, route: 'Search', icon: 'search'},
    {
      name: 'PROFILE',
      code: Colors.mainLight,
      route: 'Profile',
      icon: 'person-circle-outline',
    },
    {name: 'ABOUT US', code: Colors.mainLight, route: 'Info'},
    {name: 'QUESTION PAPERS', code: Colors.mainLight},
    {name: 'Reading History', code: Colors.mainLight, route: 'ReadingHistory'},
    {name: 'CONTACT US', code: Colors.mainLight},
    {name: "FAQ'S", code: Colors.mainLight},
    {name: 'STAFF', code: Colors.mainLight},
    {name: 'DEVELOPERS', code: Colors.mainLight, route: 'Developers'},
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
            onPress={() => {
              navigation.navigate(item.route);
            }}>
            <View style={[styles.itemContainer, {backgroundColor: item.code}]}>
              <Ionicon
                name={item.icon}
                size={22}
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
    borderWidth: scale(0.4),
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
    padding: scale(2),
    textAlign: 'center',
  },
});
