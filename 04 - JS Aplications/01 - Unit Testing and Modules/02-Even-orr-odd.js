const expect = require("chai").expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe("Is odd or even", function(){
    it("should return odd", () =>{
        expect(isOddOrEven("asd")).to.equal("odd");
    })

    it("should return even", () =>{
        expect(isOddOrEven("asdf")).to.equal("even");
    })

    it("should be a string, otherwise return undefind", () => {
        expect(isOddOrEven(15)).to.equal(undefined);
        expect(isOddOrEven({name: "Pesho"})).to.equal(undefined);
    })
})