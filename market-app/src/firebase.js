import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDQWb4cXV5VIatPamhn6hr0Lf1DUWBZgT0",
    authDomain: "market-app-d5a62.firebaseapp.com",
    databaseURL: "https://market-app-d5a62.firebaseio.com",
    projectId: "market-app-d5a62",
    storageBucket: "market-app-d5a62.appspot.com",
    messagingSenderId: "779563339762",
    appId: "1:779563339762:web:e2262a953ba932be19656b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase