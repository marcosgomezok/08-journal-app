import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB3Ej5wR4wSVQ2HoL76uFIDoe_MecC-29Q",
    authDomain: "react-app-cursos-mg.firebaseapp.com",
    databaseURL: "https://react-app-cursos-mg.firebaseio.com",
    projectId: "react-app-cursos-mg",
    storageBucket: "react-app-cursos-mg.appspot.com",
    messagingSenderId: "516377201660",
    appId: "1:516377201660:web:6a781199b345fe5f384079"
  };
const firebaseConfigTesting = {
    apiKey: "AIzaSyBtH-PyDLFGRkmWFFhF2QEx23l0PgrWoQ4",
    authDomain: "redux-demo-2d6c2.firebaseapp.com",
    projectId: "redux-demo-2d6c2",
    storageBucket: "redux-demo-2d6c2.appspot.com",
    messagingSenderId: "717103744620",
    appId: "1:717103744620:web:efb61bce9ee858a1aaba49",
    measurementId: "G-C2NT1HXPET"
  };
if(process.env.NODE_ENV ==='test'){
  //testing
  firebase.initializeApp(firebaseConfigTesting);
}else{
  //dev/prod
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}