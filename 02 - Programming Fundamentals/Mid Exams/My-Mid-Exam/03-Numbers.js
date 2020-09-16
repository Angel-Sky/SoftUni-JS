function numbers(input) {
    let numbers = input.split(" ").map(Number);

    let averageNum = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    let biggerThanAverage = numbers.filter(n => n > averageNum);

    if (biggerThanAverage.length <= 0) {
        console.log("No");
    } else {
        biggerThanAverage.sort(function(a, b) {
            return b - a;
          });
    
        console.log(biggerThanAverage.slice(0, 5).join(" "));
    } 
  
}

numbers("-1 -2 -3 -4 -5 -6");