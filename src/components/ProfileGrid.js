import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useContext} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {FlatGrid} from 'react-native-super-grid';
import {scale} from 'react-native-size-matters';
import {Colors} from '../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {FEEDBACK_URL} from '../utils/config';
import {AuthContext} from '../context/AuthContext';

const ProfileGrid = () => {
  const {userInfo} = useContext(AuthContext);
  const data = userInfo.GetPatronInfo;

  // For Category
  if (data.categorycode == 'ST') {
    var category = 'STUDENT';
  } else if (data.categorycode == 'S') {
    var category = 'STAFF';
  } else {
    var category = '';
  }

  const [items, setItems] = React.useState([
    {
      name: 'Category:',
      code: Colors.mainLight,
      icon: 'school-outline',
      data: category,
    },
    {
      name: 'Date of birth:',
      code: Colors.mainLight,
      icon: 'calendar-account-outline',
      data: data.dateofbirth,
    },
    {
      name: 'Card expiry date:',
      code: Colors.mainLight,
      icon: 'card-bulleted-outline',
      data: data.dateexpiry,
    },

    {
      name: 'Change your password',
      code: Colors.mainLight,
      icon: 'form-textbox-password',
      // data: 'Click here',
    },
    {
      name: 'Send a feedback',
      code: Colors.mainLight,
      icon: 'message-processing-outline',
      // data: 'Click here',
    },
    {
      name: 'Logout',
      code: Colors.mainLight,
      icon: 'logout-variant',
      // data: 'Click here',
    },
  ]);
  const {logout} = useContext(AuthContext);
  const navigation = useNavigation();
  return (
    <FlatGrid
      itemDimension={wp(100)}
      data={items}
      style={styles.gridView}
      //   staticDimension={300}
      // fixed
      spacing={scale(11)}
      renderItem={({item}) => (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            if (item.name == 'Change your password') {
              navigation.navigate('ChangePassword');
            } else if (item.name == 'Send a feedback') {
              Linking.openURL(FEEDBACK_URL);
            } else if (item.name == 'Logout') {
              logout();
            }
          }}>
          <View style={[styles.itemContainer, {backgroundColor: item.code}]}>
            <Icon
              name={item.icon}
              size={30}
              color={Colors.font}
              style={styles.Icon}
            />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemData}>{item.data}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default ProfileGrid;

const styles = StyleSheet.create({
  gridView: {
    position: 'absolute',
    top: scale(-5),
    flex: 1,
    margin: scale(3),
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    width: scale(-100),
    justifyContent: 'flex-start',
    borderRadius: 5,
    padding: scale(5),
    height: hp(7.8),
    borderColor: Colors.main,
    borderWidth: scale(0.5),
  },
  itemName: {
    top: scale(13.5),
    left: scale(20),
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'BreezeSans-Bold',
    color: Colors.font,
    fontWeight: '600',
    textAlign: 'left',
  },
  itemData: {
    top: scale(13),
    left: scale(40),
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'BreezeSans-Bold',
    color: '#002c6280',
    fontWeight: '600',
    textAlign: 'left',
  },
  Icon: {
    top: scale(9.5),
    left: scale(10),
    textAlign: 'left',
  },
});
