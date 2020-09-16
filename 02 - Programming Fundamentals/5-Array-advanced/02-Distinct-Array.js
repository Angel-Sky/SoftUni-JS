function distrinctArray(arr) {

    function takeUniques(element, index, array) {
        return array.indexOf(element) === index;
    }
    let uniques = arr.filter(takeUniques);

    console.log(uniques.join(" "));
}

distrinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
