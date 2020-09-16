function schoolLibrary(data) {
    let books = data.shift().split("&");

    for (let line of data) {
        if (line != "Done") {
            let [command, title, title2] = line.split(" | ");
            switch(command) {
                case "Add Book":
                    if (!books.includes(title)) {
                        books.splice(0, 0, title);
                    }
                break;
                case "Take Book":
                    if (books.includes(title)) {
                        let indexOfBook = books.indexOf(title);
                        books.splice(indexOfBook, 1);
                    }
                break;
                case "Swap Books":
                    if (books.includes(title) && books.includes(title2)) {
                        let indexOfBook1 = books.indexOf(title);
                        let indexOfBook2 = books.indexOf(title2);
                        let temp = books[indexOfBook1];
                        books[indexOfBook1] = books[indexOfBook2];
                        books[indexOfBook2] = temp;
                    }
                break;
                case "Insert Book":
                    books.push(title);
                break;
                case "Check Book":
                    let index = Number(title);
                    if (index <= books.length) {
                        console.log(books[index]);
                    }
                break;
            }
            
        } else {
            console.log(books.join(", "));
            break;
        }
    }
 }

schoolLibrary([
    'Anna Karenina&Heart of Darkness&Catch-22& The Stranger',
    'Add Book | David Copperfield',
    'Add Book | One Thousand and One Nights',
    'Swap Books | One Thousand and One Nights | Catch-22',
    'Take Book | David Copperfield',
    'Insert Book | The Stories of Anton Chekhov',
    'Check Book | 17',
    'Done',
    ''  
  ])