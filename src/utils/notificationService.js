import messaging from '@react-native-firebase/messaging';
import navigationService from './navigationService';

export async function notificationListeners() {
  messaging().onNotificationOpenedApp(remoteMessage => {
    const notificationData = remoteMessage.notification.body;
    const notificationTitle = remoteMessage.notification.title;
    setTimeout(() => {
      navigationService.navigate('Notice', {
        notificationData,
        notificationTitle,
      });
    }, 500);
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log('Kill state: ', remoteMessage.notification);
        const notificationData = remoteMessage.notification.body;
        const notificationTitle = remoteMessage.notification.title;
        setTimeout(() => {
          navigationService.navigate('Notice', {
            notificationData,
            notificationTitle,
          });
        }, 500);
      }
    });
}
