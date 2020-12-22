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
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}