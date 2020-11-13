import genEl from "../dom-generator.js";

const baseUrl = 'https://books-f6954.firebaseio.com/books/';
let elements = {
    loadBtn: () => document.querySelector("#loadBooks"),
    existingBooksEl: () => document.querySelector("#existing-books > tbody"),
    createFormEl: () => document.querySelector("#create-form"),
    createTitleInp: () => document.querySelector("#create-title"),
    createAuthorInp: () => document.querySelector("#create-author"),
    createIsbnInp: () => document.querySelector("#create-isbn"),
    submitBookBtn: () => document.querySelector("#submit"),
    updateBtn: () => document.querySelector("#edit"),
    errorDiv: () => document.querySelector("#error")
}

elements.loadBtn().addEventListener("click", loadData);
elements.submitBookBtn().addEventListener("click", submitBook);

async function loadData() {
    fetch(baseUrl + ".json")
        .then(res => res.json())
        .then(renderExistingBooks)
        .catch(e => {
            const err = {message: "There aren't any books at the database"};
            errorHandler(err)
        })
}

function renderExistingBooks(data) {
    elements.existingBooksEl().innerHTML = "";
    Object.entries(data).forEach(([id, innerData]) => {
        const editBtn = genEl("button", "Edit");
        editBtn.setAttribute("data-key", id);
        const delBtn = genEl("button", "Delete");

        const tableRow = genEl("tr", [
            genEl("td", innerData.title),
            genEl("td", innerData.author),
            genEl("td", innerData.isbn),
            editBtn,
            delBtn]);

        elements.existingBooksEl().appendChild(tableRow);

        delBtn.addEventListener("click", async () => {
            try {
                await deleteBook(id);
                delBtn.disabled = true;
                setTimeout(() => {
                    tableRow.remove();
                }, 800);
            } catch (err) {
                errorHandler(err);
            }
        });

        editBtn.addEventListener("click", editBook);
    })
}

function editBook() {
    const id = this.getAttribute("data-key");
    let titleInp = elements.createTitleInp();
    let authorInp = elements.createAuthorInp();
    let isbnInp = elements.createIsbnInp();

    fetch(baseUrl + id + ".json")
        .then(res => res.json())
        .then(loadInputs)
        .catch(errorHandler)

    function loadInputs({ title, author, isbn }) {
        titleInp.value = title;
        authorInp.value = author;
        isbnInp.value = isbn;

        elements.submitBookBtn().style.display = "none";
        elements.updateBtn().style.display = "block";
    }

    elements.updateBtn().setAttribute("data-key", id);
    elements.updateBtn().addEventListener("click", updateBook);
   
    async function updateBook(e) {
        e.preventDefault();
        const key = this.getAttribute("data-key");

        if (titleInp.value.trim() !== "" && authorInp.value.trim() !== "" && isbnInp.value.trim() !== "") {
            const obj = {
                title: titleInp.value,
                author: authorInp.value,
                isbn: isbnInp.value
            }
            try {
                await editEntry(key, obj);
                await loadData();
                elements.createFormEl().reset();
                elements.submitBookBtn().style.display = "block";
                elements.updateBtn().style.display = "none";
            } catch (err) {
                errorHandler(err);
            }

        } else {
            const err = { message: "All fields are required" };
            errorHandler(err);
        }
    }

}

async function submitBook(e) {
    e.preventDefault();
    const title = elements.createTitleInp().value;
    const author = elements.createAuthorInp().value;
    const isbn = elements.createIsbnInp().value;

    if (title.trim() !== "" && author.trim() !== "" && isbn.trim() !== "") {
        const newBook = { title, author, isbn };
        try {
            await addBook(newBook);
            await loadData();
            elements.createFormEl().reset();
        } catch (err) {
            errorHandler(err);
        }
    } else {
        const err = { message: 'All fields are required.' };
        errorHandler(err);
    }
}

async function deleteBook(id) {
    await fetch(baseUrl + id + ".json", { method: "DELETE" });
}

async function addBook(obj) {
    await fetch(baseUrl + ".json", { method: "POST", body: JSON.stringify(obj) });
}

async function editEntry(id, obj) {
    await fetch(baseUrl + id + "/.json", { method: "PUT", body: JSON.stringify(obj) });
}

function errorHandler(err) {
    let errorElement = elements.errorDiv();
    errorElement.style.display = "block";
    errorElement.textContent = err.message;
    setTimeout(() => {
        errorElement.style.display = "none";
    }, 2000);
}