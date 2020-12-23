import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//console.log(process.env)

 const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
}; 
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}




/*
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
      databaseURL: "https://redux-demo-2d6c2-default-rtdb.firebaseio.com",
      projectId: "redux-demo-2d6c2",
      storageBucket: "redux-demo-2d6c2.appspot.com",
      messagingSenderId: "717103744620",
      appId: "1:717103744620:web:fb602a21c550d904aaba49",
    
      };
    if(process.env.NODE_ENV ==='test'){
      //testing
      firebase.initializeApp(firebaseConfigTesting);
    }else{
      //dev/prod
      firebase.initializeApp(firebaseConfig);
    }
    */