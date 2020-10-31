class Forum {
    constructor() {
        this._users = [];
        this._questions = [];
        this._id = 1;
        this._currentUsers = [];
    }

    register(username, password, repeatPassword, email) {
        if (username === "" || password == "" ||
            repeatPassword == "" || email == "") {
            throw new Error("Input can not be empty");
        } else if (password !== repeatPassword) {
            throw new Error("Passwords do not match");
        } else if (this._users.find(x => x.username == username || x.email == email)) {
            throw new Error("This user already exists!");
        }

        this._users.push({ username, password, email })
        return `${username} with ${email} was registered successfully!`
    }

    login(username, password) {
        let user = this._users.find(x => x.username == username);
        if (user == undefined) {
            throw new Error("There is no such user");
        }
        if (user.password == password) {
            this._currentUsers.push(username);
            return "Hello! You have logged in successfully";
        }
    }

    logout(username, password) {
        let user = this._users.find(x => x.username == username);
        if (user == undefined || !this._currentUsers.includes(username)) {
            throw new Error("There is no such user");
        }
        if (user.password == password) {
            this._currentUsers.splice((this._currentUsers.indexOf(username)), 1);
            return "You have logged out successfully";
        }

    }

    postQuestion(username, question) {
        let user = this._users.find(x => x.username === username);
        if (user === undefined || !this._currentUsers.includes(user.username)) {
            throw new Error("You should be logged in to post questions");
        } 
        if (question === "") {
            throw new Error("Invalid question");
        }

        this._questions.push({ id: this._id, publishedBy: username, question, answers: [] });
        this._id++;
        return "Your question has been posted successfully";
    }

    postAnswer(username, questionID, answer) {
        let question = this._questions.find(x => x.id == questionID);
        let user = this._users.find(x => x.username === username);

        if (user === undefined || !this._currentUsers.includes(username)) {
            throw new Error("You should be logged in to post questions");
        } 
        if (answer === "") {
            throw new Error("Invalid answer");
        } 
        if (question === undefined) {
            throw new Error("There is no such question");
        }
        question.answers.push([username, answer]);
        return "Your answer has been posted successfully";
    }

    showQuestions() {
        let result = [];
        this._questions.forEach(ques => {
            result.push(`Question ${ques.id} by ${ques.publishedBy}: ${ques.question}`);
            if (ques.answers.length > 0) {
                ques.answers.forEach(ans => {
                    result.push(`---${ans[0]}: ${ans[1]}`)
                })
            }
        });

        return result.join("\n").trim()
    }
}


let forum = new Forum();

forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');
forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan', 1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael', 2, "How old is she?");
forum.postAnswer('Michael', 2, "Tell us how tall she is.");
//console.log(forum._questions[0])
console.log(forum.showQuestions())