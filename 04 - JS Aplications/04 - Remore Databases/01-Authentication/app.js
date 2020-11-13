//The HTML and CSS are written in 2016 :D 

import genEl from "../dom-generator.js"

window.addEventListener("load", () => {
    const regForm = document.querySelector("#register");
    const registerBtn = document.querySelector("#registerBtn");
    const regEmailInp = document.querySelector("#regEmail");
    const regPassInp = document.querySelector("#regPass");
    const regMessage = document.querySelector("#regMessage")

    const logForm = document.querySelector("#login");
    const logInBtn = document.querySelector("#loginBtn");
    const logEmailInp = document.querySelector("#logEmail");
    const logPassInp = document.querySelector("#logPass");

    const errorDiv = document.querySelector("#error");
    const logedInDiv = document.querySelector("#loged")

    registerBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let password = regPassInp.value.trim();
        let email = regEmailInp.value.trim();
        if (password.length >= 6) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(registered)
            .catch(err => messageHandler(err));
        } else {
            const message = {message: "Email must be in valid format. Password must be at least 6 charachters long. "}
            messageHandler(message);
        }

    });

    function registered() {
        const mess = {message: "You have been successfully registered!"};
        messageHandler(mess);
        regForm.reset();
    }

    logInBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let password = logPassInp.value.trim();
        let email = logEmailInp.value.trim();

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(login)
            .catch(error => messageHandler(error));

    })

    function login() {
        logForm.reset();
        regForm.style.display = "none";
        logForm.style.display = "none";
        logedInDiv.style.display = "block";

        let span = genEl("span","Hello, there!");
        let logOutBtn = genEl("button", "Log out");

        logedInDiv.append(span, logOutBtn);

        logOutBtn.addEventListener("click", () => {
            firebase.auth().signOut()
                .then(displayForms)
                .catch(messageHandler);
        })
    }


    function displayForms() {
        regForm.style.display = "inline-block";
        logForm.style.display = "inline-block";
        logedInDiv.style.display = "none";
        logedInDiv.innerHTML = "";
    }

    function messageHandler(err) {
        errorDiv.style.display = "block";
        errorDiv.textContent = err.message;
        setTimeout(() => {
            errorDiv.style.display = "none";
        }, 4000);
    }







})