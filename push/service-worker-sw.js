// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.

import firebase from '@react-native-firebase/app'


// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object

if (!firebase.apps.length) {
  firebase.initializeApp({
  apiKey: 'AIzaSyB49YXwX2VhUTFr5qct7ZvBzbYA8AxNVhs',
  authDomain: 'push-fa988.firebaseapp.com',
  databaseURL: 'https://push-fa988.firebaseio.com',
  projectId: 'push-fa988',
  storageBucket: 'push-fa988.appspot.com',
  messagingSenderId: 'sender-id',
  appId: '1:465733274221:android:d35e711602bbeaa7c0cd64',
  measurementId: 'G-measurement-id',
});

}else {
  firebase.app(); // if already initialized, use that one
}

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
export const messaging = firebase.messaging();