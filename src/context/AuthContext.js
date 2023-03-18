import React, {createContext, useState, useEffect, useContext} from 'react';
import {Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BASE_URL, data, IMAGE_URL, USER_INFO} from '../utils/config';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  var parseString = require('react-native-xml2js').parseString;

  const login = async (username, password) => {
    setIsLoading(true);
    await axios
      .get(
        `${BASE_URL}/cgi-bin/koha/ilsdi.pl?service=AuthenticatePatron&username=${username}&password=${password}`,
        {username, password},
      )
      .then(res => {
        parseString(res.data, function (err, result) {
          if (result.AuthenticatePatron.id) {
            var userToken = result.AuthenticatePatron.id[0];
            // const stat = res.status();
            // setUserInfo(userInfo);
            setUserToken(userToken);
            AsyncStorage.setItem('userToken', userToken);
          } else {
            userToken = false;
            console.log(userToken);
          }

          //   return res.status(401).json({msg: 'Failed login'});
        });
      })

      .catch(e => {
        console.log(`Login error ${e}`);
      });

    // setUserToken('sefsesghs');
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userToken');
    // AsyncStorage.removeItem('userInfo');
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem('userToken');
      // let userInfo = await AsyncStorage.getItem('userInfo');
      console.log('Token : ' + userToken);
      // userInfo = JSON.parse(userInfo);

      if (userToken) {
        setUserToken(userToken);
        // setUserInfo(userInfo);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(`isLoggged in error ${e}`);
    }
  };

  const config = {
    method: 'post',
    url: BASE_URL,
    data: data,
    headers: {'Content-Type': 'multipart/form-data'},
  };

  const getBase64 = async () => {
    const patronimage = IMAGE_URL + userToken;
    console.log(patronimage);
    return await axios
      .get(patronimage, {
        responseType: 'arraybuffer',
      })
      .then(response =>
        setUserInfo(Buffer.from(response.data, 'binary').toString('base64')),
      )
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        console.log();
      });
  };

  const adminLogin = async () => {
    setIsLoading(true);
    await axios(config)
      .then(res => {
        console.log(JSON.stringify(res.data).includes('Welcome'));
        console.log('admin: ' + JSON.stringify(res.status));
      })
      // .then(() => {
      //   getBase64();
      // })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getPatronInfo = async () => {
    setIsLoading(true);
    await axios
      .get(`${USER_INFO}=6000&show_fines=1&show_loans=1`)
      // .get(`${USER_INFO}=${userToken}&show_fines=1&show_loans=1`)
      .then(res => {
        parseString(res.data, {trim: true}, function (err, result) {
          let userInfo = result;
          setUserInfo(userInfo);
          // AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
          // console.log('name: ' + userInfo.GetPatronInfo.surname[0]);
        });
      })
      .catch(err => {
        console.log(err);
      });
    setIsLoading(false);
  };

  // const base64Icon = 'data:image/png;base64, {userInfo}';
  // <Image style={{width: 50, height: 50}} source={{uri: base64Icon}} />;

  useEffect(() => {
    // adminLogin();
    isLoggedIn();
  }, []);

  useEffect(() => {
    getPatronInfo();
  }, [userToken]);

  return (
    <AuthContext.Provider
      value={{login, logout, isLoading, userToken, userInfo}}>
      {children}
    </AuthContext.Provider>
  );
};

// export const useAPI = () => {
//   const context = useContext(AuthProvider);
//   console.log(context);
//   if (context === undefined) {
//     throw new Error('Context must be used within a Provider');
//   }
//   return context;
// };
