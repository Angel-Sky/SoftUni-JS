const baseUrl = 'https://my-blog-softuni.firebaseio.com/articles/';
firebase.initializeApp({
    apiKey: "AIzaSyBwy465BbLlHh06SFtW2K9EhwFXL3l8b-Q",
    authDomain: "my-blog-softuni.firebaseapp.com",
    databaseURL: "https://my-blog-softuni.firebaseio.com",
    projectId: "my-blog-softuni",
    storageBucket: "my-blog-softuni.appspot.com",
    messagingSenderId: "21874307407",
    appId: "1:21874307407:web:e7652b3d22431bd252d53a"
});

const auth = firebase.auth();

let data = {};
auth.onAuthStateChanged(function (currentUser) {
    data.isLoggedIn = Boolean(currentUser);
    if (currentUser) {
        data.userid = currentUser.uid;
        data.email = currentUser.email;
    }
});

function changeContext(context, isEditing) {
    context.isLoggedIn = data.isLoggedIn;
    context.email = data.email ? data.email : undefined;
    context.isEditing = isEditing ? true : false;
}