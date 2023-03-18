import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

const Developers = () => {
  const {userInfo} = useContext(AuthContext);
  const data = userInfo.GetPatronInfo;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{JSON.stringify(Object.keys(data.loans[0].loan).length)}</Text>
    </View>
  );
};

export default Developers;

const styles = StyleSheet.create({});
