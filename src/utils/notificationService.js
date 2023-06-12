import messaging from '@react-native-firebase/messaging';
import navigationService from './navigationService';
import notifee from '@notifee/react-native';
export async function notificationListeners() {
  // Background mode push notification (notice)
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

  // Kill mode push notification (notice)
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

  // Local notification (Background mode)
  notifee.onBackgroundEvent(async ({type, detail}) => {
    console.log('Background mode');
    setTimeout(() => {
      navigationService.navigate('MyBooks');
    }, 1000);
  });

  // // Local notification (Kill mode)
  // notifee.getInitialNotification(async ({type, detail}) => {
  //   console.log('Received initial notification:');
  //   setTimeout(() => {
  //     navigationService.navigate('MyBooks');
  //   }, 1000);
  // });
}
