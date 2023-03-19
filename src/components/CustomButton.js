import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
export default function CustomButton({label, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: Colors.main,
        padding: 20,
        borderRadius: 10,
        marginBottom: 5,
        marginTop: 5,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon
          name="barcode-scan"
          size={responsiveFontSize(2.3)}
          style={{marginRight: wp(2)}}
          color={Colors.font}
        />
        <Text
          style={{
            textAlign: 'center',
            fontSize: responsiveFontSize(2),
            color: Colors.font,
            fontFamily: 'BreezeSans-Bold',
          }}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
