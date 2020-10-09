class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x${(this.value).toString(16).toUpperCase()}`;
    }

    /**
     * Add to current value
     * @param {Hex} hex Hex number to add
     */
    plus(hex) {
        return new Hex(this.value + hex);
    }

    /**
     * Substract from current value
     * @param {Hex} hex Hex number to substract
     */
    minus(hex) {
        return new Hex(this.value - hex);
    }

    static parse(string) {
        return parseInt(string, 16);
    }

}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
