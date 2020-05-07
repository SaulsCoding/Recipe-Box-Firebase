 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 import "firebase/storage";
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCdNgd4SxjZG0S2_Xj5-49hsjBjrp_GB00",
    authDomain: "net-ninja-marioplan-3ad5b.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-3ad5b.firebaseio.com",
    projectId: "net-ninja-marioplan-3ad5b",
    storageBucket: "net-ninja-marioplan-3ad5b.appspot.com",
    messagingSenderId: "885362255123",
    appId: "1:885362255123:web:30bf43e25e1f6cbc5fe6e6",
    measurementId: "G-2NBFREVSDG"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true });
  // const storageService = firebase.storage();
  // const storageRef = storageService.ref();

  export default firebase;