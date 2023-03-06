import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const Buttons = ({on_press, btn_text}) => {
  return (
    <LinearGradient
      colors={['#7826CF', '#8429D6','#962EDB']}
      style={{
        justifyContent: 'center',
        width: '95%',
        backgroundColor: '#1E80ED',
        height: 50,
        marginBottom: 30,
        borderRadius: 10,
      }}>
      <TouchableOpacity onPress={on_press}>
        <Text
          style={{
            fontSize: 15,
            letterSpacing: 1.5,
            textAlign: 'center',
            position: 'relative',
            fontFamily: 'OpenSans-SemiBold',
            color: Colors.white,
          }}>
          {btn_text}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Buttons;

const styles = StyleSheet.create({});
