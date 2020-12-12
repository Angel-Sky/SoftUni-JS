var firebaseConfig = {
    apiKey: "AIzaSyAbqRAtEDqFPyCFhVTqMsIg5V_aK4blTtE",
    authDomain: "softuni-spa-exam.firebaseapp.com",
    projectId: "softuni-spa-exam",
    storageBucket: "softuni-spa-exam.appspot.com",
    messagingSenderId: "1012583262856",
    appId: "1:1012583262856:web:9c6f2f73a81670cf7b4d3d"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const baseUrl = 'https://softuni-spa-exam-default-rtdb.firebaseio.com/destinations';

function changeContext(context) {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        context.isLoggedIn = true;
        context.email = user.email;
        context.userId = user.localId;
    } else {
        context.isLoggedIn = false;
    }
}