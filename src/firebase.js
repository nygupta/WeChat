import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyA1K4a3WTfe_QXo_siI7BlpJ0dfSjY6BA0",
    authDomain: "wechat-80c79.firebaseapp.com",
    projectId: "wechat-80c79",
    storageBucket: "wechat-80c79.appspot.com",
    messagingSenderId: "1038010575031",
    appId: "1:1038010575031:web:39f8073f2f62032781c532"
}).auth();