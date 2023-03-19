import React, {createContext, useState, useEffect, useContext} from 'react';
import {Alert, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import axios from 'axios';
import {
  BARCODE_URL,
  BASE_URL,
  data,
  IMAGE_URL,
  USER_INFO,
} from '../utils/config';
import AwesomeAlert from 'react-native-awesome-alerts';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {Colors} from '../constants';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [touch, setTouch] = useState();
  var parseString = require('react-native-xml2js').parseString;

  // Login
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
            setUserToken(userToken);
            AsyncStorage.setItem('userToken', userToken);
            setShowAlert(true);
            setAlertMsg('Logged in sucessfully');
            setButtonText('OK');
            setTouch(true);
          } else {
            userToken = false;
            console.log(userToken);
            setShowAlert(true);
            setTouch(false);
            setAlertMsg('Incorrect USN or password');
            setButtonText('Back to login');
          }
        });
      })

      .catch(e => {
        console.log(`Login error ${e}`);
      });

    setIsLoading(false);
  };

  // Logout
  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    setShowAlert(true);
    setAlertMsg('Logged out sucessfully');
    setButtonText('OK');
    setTouch(true);
    AsyncStorage.removeItem('userToken');
    // AsyncStorage.removeItem('userInfo');
    setIsLoading(false);
  };

  // Is Logged in Check
  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem('userToken');
      // let userInfo = await AsyncStorage.getItem('userInfo');
      console.log('Token : ' + userToken);
      // userInfo = JSON.parse(userInfo);

      if (userToken != null) {
        setUserToken(userToken);
        // setUserInfo(userInfo);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(`isLoggged in error ${e}`);
    }
  };

  // Admin Login
  const config = {
    method: 'post',
    url: BASE_URL,
    data: data,
    headers: {'Content-Type': 'multipart/form-data'},
  };
  const adminLogin = async () => {
    setIsLoading(true);
    await axios(config)
      .then(res => {
        console.log(JSON.stringify(res.data).includes('admin'));
        console.log('admin: ' + JSON.stringify(res.status));
      })
      .then(() => {
        // getBase64();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Barcode Login
  const barcodeLogin = async data => {
    setIsLoading(true);
    console.log('Barcode:', data);
    await axios
      .get(`${BARCODE_URL}=${data}&id_type=cardnumber`)
      .then(res => {
        parseString(res.data, function (err, result) {
          if (result.LookupPatron.id) {
            var userToken = result.LookupPatron.id[0];
            setUserToken(userToken);
            AsyncStorage.setItem('userToken', userToken);
            setShowAlert(true);
            setAlertMsg('Logged in sucessfully');
            setButtonText('OK');
            setTouch(true);
          } else {
            userToken = false;
            console.log(userToken);
            setShowAlert(true);
            setTouch(false);
            setAlertMsg('Incorrect USN or password');
            setButtonText('Back to login');
            setShowAlert(true);
            setTouch(false);
            setAlertMsg('Incorrect USN or password');
            setButtonText('Back to login');
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

  // Patron Info
  const getPatronInfo = async () => {
    setIsLoading(true);
    await axios
      // .get(`${USER_INFO}=67&show_fines=1&show_loans=1`)
      // .get(
      //   'https://catalog.bywatersolutions.com/cgi-bin/koha/ilsdi.pl?service=GetPatronInfo&patron_id=40&show_contact=0&show_loans=1',
      // )
      .get(`${USER_INFO}=${userToken}&show_fines=1&show_loans=1`)
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

  //Patron Image
  const getBase64 = async () => {
    const patronimage = IMAGE_URL + userToken;
    console.log(patronimage);
    return await axios
      .get(patronimage, {
        responseType: 'text',
        responseEncoding: 'base64',
      })
      .then(response => {
        const img = Buffer.from(response.data, 'base64');
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        console.log();
      });
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

  // useEffect(() => {
  //   getBase64();
  // }, [userToken]);

  return (
    <>
      <AwesomeAlert
        show={showAlert}
        // alertContainerStyle={{backgroundColor: Colors.white}}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: Colors.white,
          height: hp(18),
          width: wp(70),
        }}
        title="KLE Library"
        titleStyle={{
          fontSize: responsiveFontSize(2),
          fontFamily: 'BreezeSans-Bold',
          color: Colors.font,
        }}
        message={alertMsg}
        messageStyle={{
          fontSize: responsiveFontSize(1.8),
          fontFamily: 'BreezeSans-Bold',
          color: Colors.font2,
        }}
        showConfirmButton={true}
        confirmText={buttonText}
        confirmButtonTextStyle={{
          fontSize: responsiveFontSize(1.7),
          fontFamily: 'BreezeSans-Bold',
          color: Colors.font,
        }}
        confirmButtonStyle={{backgroundColor: Colors.main}}
        onConfirmPressed={() => {
          setShowAlert(false);
        }}
        closeOnTouchOutside={touch}
      />
      <AuthContext.Provider
        value={{login, logout, barcodeLogin, isLoading, userToken, userInfo}}>
        {children}
      </AuthContext.Provider>
    </>
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
