importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');

//  initialize
firebase.initializeApp({
  apiKey: "AIzaSyDAfynwTddYa9jh46ayIwFh4Tm8fqRbkz8",
  authDomain: "quiz-pwa-ts.firebaseapp.com",
  projectId: "quiz-pwa-ts",
  storageBucket: "quiz-pwa-ts.appspot.com",
  messagingSenderId: "1094842120233",
  appId: "1:1094842120233:web:d5df469f5cc8dca6004438"
});


firebase.messaging();