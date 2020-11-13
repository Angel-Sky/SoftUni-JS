import contacts from "./contacts.js";
import contactView from "./template.js";
const contactsDiv = document.querySelector("#contacts");

const contactTemplate = Handlebars.compile(contactView);

//const contactsHtml = contacts.map(c => contactTemplate(c)).join("");
const contactsHtml = contactTemplate({contacts});
contactsDiv.innerHTML = contactsHtml;

[...document.querySelectorAll(".detailsBtn")].forEach(button => button.addEventListener("click", (e) => {
    let details = e.target.parentElement.querySelector(".details");
    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}))


