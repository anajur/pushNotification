/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { Alert } from 'react-native';

import {name as appName} from './app.json';
//import messaging from '@react-native-firebase/messaging';
import firebase from '@react-native-firebase/app'
import {messaging} from './service-worker-sw.js';

// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('Message arrived', remoteMessage);
// });


messaging.getToken().then((currentToken) => {
  if (currentToken) {
    console.log(currentToken)
  } else {
    // Show permission request.
    console.log(
      'No Instance ID token available. Request permission to generate one.')
  }
  /** When app is active */
  messaging.onMessage((payload) => {
    console.log(payload)
  }, e => {
    console.log(e)
  })
})
// messaging.onMessage((payload) => {
//   console.log('Message received. ', payload);
//   Alert.alert('A new FCM message arrived!', JSON.stringify(payload));
  
//   // ...
// });
AppRegistry.registerComponent(appName, () => App);
