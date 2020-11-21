 // Your web app's Firebase configuration
firebase.initializeApp({
    apiKey: "AIzaSyDh2OjxYxATzUiRWke9x4KXP1QOHd375p4",
    authDomain: "shoe-shelf-softuni.firebaseapp.com",
    databaseURL: "https://shoe-shelf-softuni.firebaseio.com",
    projectId: "shoe-shelf-softuni",
    storageBucket: "shoe-shelf-softuni.appspot.com",
    messagingSenderId: "367212110928",
    appId: "1:367212110928:web:13c00b3cf1606cb25b5d55"
});

const auth = firebase.auth();
const db = firebase.firestore();

