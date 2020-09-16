function nationalCourt(input) {
    let totalPeople = +input.pop();
    let peoplePerHour  = input.map(Number).reduce((a, b) => a + b, 0);
    let hours = 0, totalHours = 0;
    while(totalPeople > 0) {
        if(hours % 3 == 0 && hours != 0) {
            totalHours++;
        } 
        totalPeople -= peoplePerHour;
        hours++;
        totalHours++; 
    }
    console.log(`Time needed: ${totalHours}h.`);
}

nationalCourt([ '1', '2', '3', '45' ]


)