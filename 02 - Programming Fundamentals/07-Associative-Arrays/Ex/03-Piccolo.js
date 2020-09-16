function piccolo(input) {
    let leftCars = new Map();
    let inOut = {};

    if (parkingHasCars(inOut)) {
        input.forEach(element => {
            let line = element.split(", ");
            if (line[0] == "IN") {
                leftCars.set(line[1]);
            } else {
                leftCars.delete(line[1])
            }
        });
    } else {
        console.log("Parking Lot is Empty");
    }
    
    Array.from(leftCars.entries()).sort().forEach(el => console.log(el[0]));
   
    function parkingHasCars(obj) {
        input.forEach(element => {
            let line = element.split(", ");
            if (obj.hasOwnProperty(line[0])) {
                obj[line[0]] += 1;
            } else {
                obj[line[0]] = 1;
            }
        });
        let values = Object.values(obj);
        if (values[0] != values[1]) {
            return true;
        } else {
            return false;
        }
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