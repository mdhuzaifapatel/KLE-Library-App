import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import axios from 'axios';
import {
  ADMIN_LOGIN_URL,
  BARCODE_URL,
  BASE_URL,
  BOOKS_URL,
  CHANGE_PASSWORD_URL,
  IMAGE_URL,
  USER_INFO,
} from '../utils/config';
import messaging from '@react-native-firebase/messaging';
import cheerio from 'react-native-cheerio';
import RNFetchBlob from 'rn-fetch-blob';
import AwesomeAlert from 'react-native-awesome-alerts';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {Colors} from '../constants';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [previousBooksInfo, setpreviousBooksInfo] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [buttonText, setButtonText] = useState();
  const [imageURI, setImageURI] = useState(null);
  const [touch, setTouch] = useState();
  const [deviceToken, setDeviceToken] = useState('');
  var parseString = require('react-native-xml2js').parseString;
  let token = '';

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
  const adminLogin = async () => {
    setIsLoading(true);
    await axios
      .get(`${ADMIN_LOGIN_URL}`)

      .then(res => {
        readingHistory();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Reading History
  const readingHistory = async () => {
    const res = await axios.get(`${BOOKS_URL}=${userToken}`);
    const $ = cheerio.load(res.data);
    const tableRows = $('tr');

    const data = [];
    tableRows.each((i, row) => {
      const rowData = {};

      $(row)
        .find('td')
        .each((j, cell) => {
          let key = `column${j + 1}`;
          const value = $(cell).text().trim();
          rowData.id = i;

          switch (key) {
            case 'column3':
              rowData['name'] = value;
              break;
            case 'column8':
              rowData['issuedate'] = value.split(' ')[0];
              break;
            case 'column9':
              rowData['location'] = value;
              break;
            case 'column10':
              rowData['duedate'] = value.split(' ')[0];
              break;
            case 'column11':
              rowData['returndate'] = value.split(' ')[0];
              break;
            default:
              rowData[key] = value;
              break;
          }
        });
      if (Object.keys(rowData).length > 0) {
        data.push(rowData);
      }
    });
    // console.log(data);
    setpreviousBooksInfo(data);
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
    setIsLoading(false);
  };

  // Patron Info
  const getPatronInfo = async () => {
    setIsLoading(true);
    try {
      if (userToken) {
        await axios
          .get(`${USER_INFO}=${userToken}&show_fines=1&show_loans=1`)
          .then(res => {
            parseString(res.data, {trim: true}, function (err, result) {
              let userInfo = result;
              setUserInfo(userInfo);
              // AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
              // console.log('name: ' + userInfo.GetPatronInfo.surname[0]);
            });
          })
          .then(res => {
            fetchAndStoreImage();
          })
          .catch(err => {
            console.log(err);
          });
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Patron Image
  const fetchAndStoreImage = async () => {
    try {
      const response = await RNFetchBlob.config({
        fileCache: true,
        appendExt: 'png',
      }).fetch('GET', `${IMAGE_URL}=${userToken}`);

      const localUri = response.path();
      setImageURI(`file://${localUri}`);
      // console.log(localUri);
    } catch (error) {
      console.error(error);
      const defaultImage = require('../assets/images/default-image.png');
      setImageURI(defaultImage);
    }
  };

  // Change Password
  const changePassword = async (newPassword, confirmPassword) => {
    setIsLoading(true);
    await axios
      .post(`${CHANGE_PASSWORD_URL}/${userToken}/password`, {
        password: newPassword,
        password_2: confirmPassword,
      })
      .then(function (response) {
        if (response.status == 200) {
          setShowAlert(true);
          setTouch(false);
          setAlertMsg('Password changed successfully');
          setButtonText('OK');
        }
      })
      .catch(function (error) {});
    setIsLoading(false);
  };

  // FCM Token
  const getFcmToken = async () => {
    token = await messaging().getToken();
    setDeviceToken(token);
    // console.log(token);
  };

  // Use effects
  useEffect(() => {
    getFcmToken();
    isLoggedIn();
  }, []);

  useEffect(() => {
    adminLogin();
    getPatronInfo();
  }, [userToken]);

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
        value={{
          login,
          logout,
          barcodeLogin,
          isLoading,
          userToken,
          userInfo,
          previousBooksInfo,
          imageURI,
          getPatronInfo,
          readingHistory,
          changePassword,
          deviceToken,
        }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
