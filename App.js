import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import {AuthProvider} from './src/context/AuthContext';
import AppNav from './src/navigation/AppNav';
import {useNetInfo} from '@react-native-community/netinfo';
import CheckInternet from './src/context/CheckInternet';
import {PermissionsAndroid} from 'react-native';
import {
  notificationListeners,
} from './src/utils/notificationService';

const App = () => {
  useEffect(() => {
    if (Platform.OS == 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      )
        .then(res => {
          console.log('res+++++', res);
        })
        .catch(error => {
          console.log(error);
        });
    }

    notificationListeners();
  }, []);

  const net = useNetInfo();

  return (
    <>
      {net.isConnected ? (
        <AuthProvider>
          <AppNav />
        </AuthProvider>
      ) : (
        <CheckInternet />
      )}
    </>
  );
};

export default App;
