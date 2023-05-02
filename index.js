/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import App from './App';
import {name as appName} from './app.json';
import {Text, TextInput} from 'react-native';
import navigationService from './src/utils/navigationService';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!');
  const notificationData = remoteMessage.notification.body;
  const notificationTitle = remoteMessage.notification.title;
  navigationService.navigate('Notice', {notificationData, notificationTitle});
});

// messaging().getInitialNotification(async remoteMessage => {
//   console.log('Message handled in the kill state!', remoteMessage);
// });

messaging().getInitialNotification()(async remoteMessage =>{
  
});

AppRegistry.registerComponent(appName, () => App);

if (Text.defaultProps == null) {
  Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;
}

if (TextInput.defaultProps == null) {
  TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScaling = false;
}
