import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAnBil3N5F9amSbfdnbh9Alsup7PjovkQ4",
    authDomain: "linkedin-ba98a.firebaseapp.com",
    projectId: "linkedin-ba98a",
    storageBucket: "linkedin-ba98a.appspot.com",
    messagingSenderId: "945641412038",
    appId: "1:945641412038:web:f10b081bd281b617800ec7"
  }; 
  
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  const storage = firebase.storage()
  const db = firebaseApp.firestore()

  export {auth,  db, storage}