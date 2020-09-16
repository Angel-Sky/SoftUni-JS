function scolarship(input) {
    let profit = Number(input.shift());
    let averageGrade = Number(input.shift());
    let minSalary = Number(input.shift());

    let socialSch = minSalary*(35/100);
    let excellentSch = averageGrade*25;
    let hasSch = false;
    let hasSoc = false; 
    let hasExc = false;
    
    if (averageGrade >= 5.50) {
        hasSch = true;
        hasExc = true;
    } else if (averageGrade > 4.50 && profit < minSalary) {
        hasSch = true;
        hasSoc = true;
    } 

    if (hasSch) {
        if (hasSoc == hasExc) {
            if (socialSch > excellentSch) {
                console.log(`You get a Social scholarship ${Math.floor(socialSch)} BGN`);
            } else {
                console.log(`You get a scholarship for excellent results ${Math.floor(excellentSch)} BGN`);
            }
        } else if (hasSoc) {
            console.log(`You get a Social scholarship ${Math.floor(socialSch)} BGN`);
        } else {
            console.log(`You get a scholarship for excellent results ${Math.floor(excellentSch)} BGN`);
        }
              
    } else {
        console.log("You cannot get a scholarship!");
    }
}

scolarship([100.00, 5.65, 420.00]);