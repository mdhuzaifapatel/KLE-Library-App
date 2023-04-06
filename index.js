/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from "react-native-push-notification";

import {Text, TextInput} from 'react-native';

PushNotification.configure({
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification)
  },
  requestPermissions: Platform.OS === 'ios'
})


AppRegistry.registerComponent(appName, () => App);
if (Text.defaultProps == null) {
  Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;
}

if (TextInput.defaultProps == null) {
  TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScaling = false;
}
