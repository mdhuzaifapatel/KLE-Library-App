import messaging from '@react-native-firebase/messaging';
import navigationService from './navigationService';

export async function notificationListeners() {
  // messaging().onNotificationOpenedApp(remoteMessage => {
  //   const notificationData = remoteMessage?.data?.notification;
  //   setTimeout(() => {
  //     if (notificationData) {
  //       navigationService.navigate('Notice', {notificationData});
  //     }
  //   }, 1000);
  // });


}
