function solve(input) {
    let list = JSON.parse(input);
    return list.reduce((acc, x) => {
        return Object.assign({}, acc, x)
    }, {})
}

console.log(solve(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`));