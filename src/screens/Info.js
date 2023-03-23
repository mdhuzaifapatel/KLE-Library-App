import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

const Info = () => {
  const {imageUrl} = useContext(AuthContext);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Info</Text>
      <Image source={{uri: imageUrl}} style={{width: 200, height: 200}} />
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({});
