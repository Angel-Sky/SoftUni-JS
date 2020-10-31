const expect = require("chai").expect;
const PaymentPackage = require("./06-Payment-Package.js");

describe("PaymentPackage", () => {
    const validName = "My Package";
    const validValue = 13;

    describe("Structure and Instantiation", () => {
        it("Has valid paramethers", () => {
            expect(() => new PaymentPackage(validName, validValue)).to.not.throw();
        });

        it("Is correctly set up", () => {
            const instance = new PaymentPackage(validName, validValue);
            expect(instance.name).to.equal(validName);
            expect(instance.value).to.equal(validValue);
            expect(instance.VAT).to.equal(20);
            expect(instance.active).to.equal(true);
        });

        it("Invalid name", () => {
            expect(() => new PaymentPackage('', validValue)).to.throw();
            expect(() => new PaymentPackage(undefined, validValue)).to.throw();
            expect(() => new PaymentPackage({}, validValue)).to.throw();
        });

        it("Invalid value", () => {
            expect(() => new PaymentPackage(validName, '')).to.throw();
            expect(() => new PaymentPackage(validName, -10)).to.throw();
            expect(() => new PaymentPackage(validName, {})).to.throw();
        });

        it("Has all properties", () => {
            const instance = new PaymentPackage(validName, validValue);

            expect(instance).to.have.property("name");
            expect(instance).to.have.property("value");
            expect(instance).to.have.property("VAT");
            expect(instance).to.have.property("active");
        });
    });

    describe("Accessors", () => {
        let instance = null;
        beforeEach(() => {
            instance = new PaymentPackage(validName, validValue);
        });

        it("Accepts and sets valid name", () => {
            expect(() => instance.name = "New Package").to.not.throw();
            instance.name = "New Package"
            expect(instance.name).to.equal("New Package");
        });

        it("Rejects invalid name", () => {
            expect(() => instance.name = "").to.throw();
            expect(() => instance.name = undefined).to.throw();
            expect(() => instance.name = {}).to.throw();
        });

        it("Accepts and sets valid value", () => {
            instance.value = 90;
            expect(instance.value).to.equal(90);
        });

        it("Rejects invalid value", () => {
            expect(() => instance.value = "").to.throw();
            expect(() => instance.value = undefined).to.throw();
            expect(() => instance.value = -5).to.throw();
        });

        it("Accepts and sets valid VAT", () => {
            instance.VAT = 90;
            expect(instance.VAT).to.equal(90);
        });

        it("Rejects invalid VAT", () => {
            expect(() => instance.VAT = "").to.throw();
            expect(() => instance.VAT = undefined).to.throw();
            expect(() => instance.VAT = -5).to.throw();
        });

        it("Accepts and sets valid active", () => {
            instance.active = true;
            expect(instance.active).to.be.true;

            instance.active = false;
            expect(instance.active).to.be.false;
        });

        it("Rejects invalid active", () => {
            expect(() => instance.active = "").to.throw();
            expect(() => instance.active = undefined).to.throw();
            expect(() => instance.active = -5).to.throw();
        });

    });

    describe("String infro", () => {
        let instance = null;
        beforeEach(() => {
            instance = new PaymentPackage(validName, validValue);
        });

        it("Contains the name", () => {
            expect(instance.toString()).to.contain(validName);
        });

        it("Contains the value", () => {
            expect(instance.toString()).to.contain(validValue.toString());
        });

        it("Contains VAT", () => {
            expect(instance.toString()).to.contain(instance.VAT + "%");
        });

        it("Displays inactive label", () => {
            instance.active = false;
            expect(instance.toString()).to.contain('(inactive)')
        });

        it("Updates info through setters", () => {
            instance.name = "New Package";
            instance.value = 33;
            instance.VAT = 13;

            const output = instance.toString();

            expect(output).to.contain("New Package");
            expect(output).to.contain("33");
            expect(output).to.contain("13%");
        });
    });
});