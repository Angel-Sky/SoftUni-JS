function fancyBarcodes(input) {
    let pattern = /@[#]+[A-Z][A-Za-z0-9]{4,}[A-Z]@[#]+/g
    let n = +input.shift();

    for (let i = 0; i < n; i++) {
        let barcode = input[i];
        let validation = barcode.match(pattern);
        if (validation !== null) {
            let numbers = barcode.match(/[\d]/g)
           
            if (numbers != null) {
                console.log(`Product group: ${numbers.join("")}`);
            } else {
                console.log(`Product group: 00`);
            }
              
        } else {
            console.log("Invalid barcode");
        } 
    }
}

fancyBarcodes([ '3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##' ]
)