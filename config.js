import firebase from 'firebase'; 
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBCKYOXYbVv4RUMa7F9sgsJxPBYDQU1pRI",
  authDomain: "story-hub-ddd54.firebaseapp.com",
  projectId: "story-hub-ddd54",
  storageBucket: "story-hub-ddd54.appspot.com",
  messagingSenderId: "675737568205",
  appId: "1:675737568205:web:f77b6baeac821b2f6d7a84"
};

  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore()