function sorting(array) {
    let finalArray = [];
    let sortedArray = array.sort((a, b) => a - b);
   
    for (let i = 0; i < array.length; i++) {
        let smallest = sortedArray.shift();
        let biggest = sortedArray.pop();
        
        finalArray.push(biggest);
        finalArray.push(smallest);
    }
    console.log(finalArray.join(" ") + " " + sortedArray.reverse().join(" "));
}


sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
//1 2 3 18 21 31 52 63 69 94
//94 1 69 2 63 3 52 18 31 21