//60 ot 100
function modernTimesOfHashTag(string) {
    let words = [];
    let word = '';
    
    for (let i = 0; i<string.length; i++) {
        let index = string.indexOf("#");
        while (string[index + 1] != " " && string[index + 1] != undefined && string[index + 1] != "#") {
            word += string[index + 1];
            index++;
        }
        if (word.length > 0) {
            words.push(word);
            word = "";
        } 
        string = string.substr(index+1);  
    }

    console.log(words.join("\n"))            
}

modernTimesOfHashTag("Nowadays ever#yone uses a # to tag a #special word in #socialMedia#")