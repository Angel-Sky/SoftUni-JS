var firebaseConfig = {
    apiKey: "AIzaSyBwy465BbLlHh06SFtW2K9EhwFXL3l8b-Q",
    authDomain: "my-blog-softuni.firebaseapp.com",
    databaseURL: "https://my-blog-softuni.firebaseio.com",
    projectId: "my-blog-softuni",
    storageBucket: "my-blog-softuni.appspot.com",
    messagingSenderId: "21874307407",
    appId: "1:21874307407:web:e7652b3d22431bd252d53a"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const baseUrl =  firebaseConfig.databaseURL + '/ideas';

function changeContext(context) {
    let user = sessionStorage.getItem("user");
    if (user) {
        context.isLoggedIn = true;
        context.email = JSON.parse(user).email;
        context.userId = JSON.parse(user).localId;
    } else {
        context.isLoggedIn = false;
    }
}