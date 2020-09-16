function bonusScoringSystem(input) {
    let array = input.map(Number);
    let students = array.shift();
    let lectures = array.shift();
    let bonus = array.shift();
    let attendances = array.shift();
    let maxBonus = 0;
    let attendetLectures = 0;

    while (students >= 0) {
        let totalBonus = attendances/lectures*(5+bonus);
        if (maxBonus < totalBonus) {
            maxBonus = totalBonus;
            attendetLectures = attendances;
        }
        attendances = array.shift();
        students--;
    }
    console.log(`Max Bonus: ${maxBonus.toFixed(0)}.`);
    console.log(`The student has attended ${attendetLectures} lectures.`)
}

bonusScoringSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ])