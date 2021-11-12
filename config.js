import firebase from 'firebase';

// add SDK Firebase

    const firebaseConfig = {
        apiKey: "AIzaSyDKqXuFOlnrGEqPBTrTiJNDAKqZF-0mks4",
        authDomain: "project-67-9743c.firebaseapp.com",
        databaseURL: "https://project-67-9743c-default-rtdb.firebaseio.com",
        projectId: "project-67-9743c",
        storageBucket: "project-67-9743c.appspot.com",
        messagingSenderId: "1055695473684",
        appId: "1:1055695473684:web:9f4ece9b9daab16ec12b01"
      };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();