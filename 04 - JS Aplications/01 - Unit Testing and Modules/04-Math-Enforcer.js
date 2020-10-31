const expect = require("chai").expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};


describe("mathEnforcer", function () {
    describe('addFive', function () {
       it("should return undefined for non-number parameter",function () {
           expect(mathEnforcer.addFive("5")).to.be.equal(undefined);
       });
        it("should return correct result for positive integer parameter", function () {
            expect(mathEnforcer.addFive(10)).to.be.equal(15);
        });
        it("should return correct result for negative integer parameter", function () {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });
        it("should return correct result for floating point parameter", function () {
            expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
        });
    });
 
     describe('subtractTen', function () {
         it("should return undefined for non-number parameter",function () {
             expect(mathEnforcer.subtractTen("5")).to.be.equal(undefined);
         });
         it("should return correct result for positive integer parameter", function () {
             expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
         });
         it("should return correct result for negative integer parameter", function () {
             expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
         });
         it("should return correct result for floating point parameter", function () {
             expect(mathEnforcer.subtractTen(3.14)).to.be.closeTo(-6.86, 0.01);
         });
     });
 
     describe('sum', function () {
         it("should return undefined for non-number first parameter", function () {
             expect(mathEnforcer.sum("5", 5)).to.be.equal(undefined);
         });
         it("should return undefined for non-number second parameter", function () {
             expect(mathEnforcer.sum(5, "5")).to.be.equal(undefined);
         });
         it("should return correct result for integer parameters", function () {
             expect(mathEnforcer.sum(5, -3)).to.be.equal(2);
         });
         it("should return correct result for floating point parameters", function () {
             expect(mathEnforcer.sum(2.7, 3.4)).to.be.closeTo(6.1, 0.01);
         })
     })
 });
 