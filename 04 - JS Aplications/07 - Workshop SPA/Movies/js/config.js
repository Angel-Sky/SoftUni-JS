const firebaseConfig = {
    apiKey: "AIzaSyAS_xv_macEQJ2s5P5Nl1jjOXXqAgvJkrQ",
    authDomain: "movies-softuni.firebaseapp.com",
    databaseURL: "https://movies-softuni.firebaseio.com",
    projectId: "movies-softuni",
    storageBucket: "movies-softuni.appspot.com",
    messagingSenderId: "621579342200",
    appId: "1:621579342200:web:bb30fbdb277f3af996788d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();