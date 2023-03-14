import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../constants';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export default function CustomButton({label, onPress, name}) {
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
      
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: responsiveFontSize(2),
          color: Colors.font,
          fontFamily: 'BreezeSans-Bold',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
