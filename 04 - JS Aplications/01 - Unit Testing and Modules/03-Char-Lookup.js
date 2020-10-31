const expect = require("chai").expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}


describe("Invalid paramethers", function(){
    it("First paramether shoud be a string", () => {
        expect(lookupChar(null, 0)).to.equal(undefined);
    })

    it("Second paramether shoud be an integer", () => {
        expect(lookupChar("Pesho", "20")).to.equal(undefined);
        expect(lookupChar("Pesho", 3.2)).to.equal(undefined);
    })

    it("Second paramether shoud be a positive number", () => {
        expect(lookupChar("Pesho", -1)).to.equal("Incorrect index");
    })

    it("Second paramether shoud be smaller than the length of the string", () => {
        expect(lookupChar("Pesho", 9)).to.equal("Incorrect index");
    })

    it("Index 0 should return P", () => {
        expect(lookupChar("Pesho", 0)).to.equal("P");
    })

    it("Index 2 should return s", () => {
        expect(lookupChar("Pesho", 2)).to.equal("s");
    })

    it("Index 6 should return I", () => {
        expect(lookupChar("Pesho Ivanov", 6)).to.equal("I");
    })
})