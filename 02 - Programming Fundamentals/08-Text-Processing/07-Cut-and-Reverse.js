function cutAndReverse(input) {
    let middle = input.length/2;
    let firstWord = input.substring(0, middle).split("").reverse();
    let secondWord = input.substring(middle).split("").reverse();
    console.log(firstWord.join(""));
    console.log(secondWord.join(""));
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')