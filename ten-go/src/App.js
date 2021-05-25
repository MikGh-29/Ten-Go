import logo from './logo.svg';
import './App.css';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1JYV0MEDqfIT_aDkCdpr4ItrJp3OyBV0",
  authDomain: "ten-go-5e4ef.firebaseapp.com",
  projectId: "ten-go-5e4ef",
  storageBucket: "ten-go-5e4ef.appspot.com",
  messagingSenderId: "159468804228",
  appId: "1:159468804228:web:a8524afc6a934e85844ad1",
  measurementId: "G-07E1TPLW3K"
};

function App() {
  var app;
  if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app(); // if already initialized, use that one
  }

  var db = firebase.firestore();
  
  console.log("Test");
  db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
  }) 
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
