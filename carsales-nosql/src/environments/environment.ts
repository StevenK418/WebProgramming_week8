// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = 
{
  apiKey: "AIzaSyDk4f63LvpMDlnyK7JgUYUReMd0gzU1L1E",
  authDomain: "s00200293-stevenkelly-carsales.firebaseapp.com",
  projectId: "s00200293-stevenkelly-carsales",
  storageBucket: "s00200293-stevenkelly-carsales.appspot.com",
  messagingSenderId: "1000841321122",
  appId: "1:1000841321122:web:8eca027eb3139ddd9955fb"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
