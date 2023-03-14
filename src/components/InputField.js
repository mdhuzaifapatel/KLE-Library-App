import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {Colors} from '../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  value,
  onChangeText,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 28,
      }}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{
            flex: 1,
            paddingVertical: 0.5,
            fontFamily: 'OpenSans-Medium',
            fontSize: responsiveFontSize(1.8),
          }}
          secureTextEntry={true}
          value={value}
          onChangeText={onChangeText}
          color={Colors.font}
          placeholderTextColor={Colors.font}
        />
      ) : (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{
            flex: 1,
            paddingVertical: 0.5,
            fontFamily: 'OpenSans-Medium',
            fontSize: responsiveFontSize(1.8),
          }}
          value={value}
          onChangeText={onChangeText}
          color={Colors.font}
          placeholderTextColor={Colors.font}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{color: Colors.font, fontWeight: '700'}}>
          {fieldButtonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
