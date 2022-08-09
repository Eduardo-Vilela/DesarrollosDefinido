import React from 'react';
/*Pagessssss */
import Rutas from './Componentes/Rutas'
import './App.css'
/**stylos */
import "swiper/css/bundle";
import 'bootstrap/dist/css/bootstrap.min.css';
import "rsuite/dist/rsuite.min.css";
/*firebase*/
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function App() {

  const firebaseConfig = {
  apiKey: "AIzaSyC-8Nsmtf0XqM7FsvC-Av5ufkMh76r9G2Q",
  authDomain: "desarrollosdelsud-bc1d9.firebaseapp.com",
  projectId: "desarrollosdelsud-bc1d9",
  storageBucket: "desarrollosdelsud-bc1d9.appspot.com",
  messagingSenderId: "695992130403",
  appId: "1:695992130403:web:8f452e467278a3c9e6d156"
};

const app = initializeApp(firebaseConfig);


  return (
    <>
    <Rutas/>
    </>
  );
}

export default App;
