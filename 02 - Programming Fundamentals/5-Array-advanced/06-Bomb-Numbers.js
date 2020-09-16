function bombNumbers (array, numberAndRange) {
    let bomb = numberAndRange[0];
    let range = numberAndRange[1];

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element == bomb) {
            let start = Math.max(0, i - range);
            let end = Math.min(i + range, array.length - 1);

            for (let j = start; j <= end; j++) {
                array[j] = 0;
            }
        }  
    }
    console.log(array.reduce((a, b) => a + b, 0));
}

bombNumbers(
    [8, 1, 0, 1, 1, 8, 1, 8, 0, 0, 9],
    [8, 2]
)