function solve(name, age, weight, height) {
    let bmi = calculateBMI(weight, height);
    let status = getStatus(bmi);

    let person = {
        'name': name,
        'personalInfo': { age, weight, height },
        'BMI': bmi,
        'status': status
    }

    function addRecomendation(status) {
        if (status == "obese") {
            return person.recommendation = 'admission required'
        }
    }
    
    function calculateBMI(weight, height) {
        return Math.round(+weight / (+height / 100 * +height / 100))
    }

    function getStatus(bmi) {
        if (Number(bmi) < 18.5) {
            return "underweight";
        } else if (Number(bmi) < 25) {
            return "normal";
        } else if (Number(bmi) < 30) {
            return "overweight";
        } else {
            return "obese";
        }
    }

    addRecomendation(status);
    return person;

}

console.log(solve('Kotooshu', 33, 152, 203))