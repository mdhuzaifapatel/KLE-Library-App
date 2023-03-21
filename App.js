import 'react-native-gesture-handler';

import React from 'react';
import {AuthProvider} from './src/context/AuthContext';
import AppNav from './src/navigation/AppNav';
import {useNetInfo} from '@react-native-community/netinfo';
import CheckInternet from './src/context/CheckInternet';

const App = () => {
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
