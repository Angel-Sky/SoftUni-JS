function minerTask(input) {
    let miner = {};

    for (let i = 0; i<input.length; i+=2) {
        let key = input[i];
        let value = Number(input[i+1]);
        if (!miner.hasOwnProperty(key)) {
            miner[key] = value;
        } else {
            miner[key] += value;
        }
    }

    let output = Object.entries(miner).forEach(element => {
        console.log(`${element[0]} -> ${element[1]}`);
    });
}

minerTask([
    'gold',   '155',
    'silver', '10',
    'copper', '17',
    'gold',   '15'
  ])