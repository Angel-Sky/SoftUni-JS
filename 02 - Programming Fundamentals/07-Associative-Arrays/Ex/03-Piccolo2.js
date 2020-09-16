function piccolo(input) {
    let parking = new Map();
    for (let line of input) {
        let [direction, carNumber] = line.split(", ");
        if (direction == "IN") {
            parking.set(carNumber);
        } else {
            parking.delete(carNumber);
        }
    }
    if (parking.size > 0) {
        let sorted = Array.from(parking.keys())
        .sort()
        .forEach(el => {
            console.log(el);
        })
    } else {
        console.log("Parking Lot is Empty")
    }    
}

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
  ]
  )