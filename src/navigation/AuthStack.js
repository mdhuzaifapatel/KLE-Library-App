import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { Splash, Login } from '../screens';
import ScannerScreen from '../screens/ScannerScreen';

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
      {/* <Stack.Screen name="Onboarding" component={Onboarding} /> */}

      {/* <Stack.Screen name="Splash" component={Splash} /> */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ScannerScreen" component={ScannerScreen} />
      {/* <Stack.Screen name="Home" component={Home} /> */}
      {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
