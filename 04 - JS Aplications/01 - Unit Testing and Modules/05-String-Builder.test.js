const expect = require('chai').expect;
const assert = require('chai').assert;
const StringBuilder = require("./05-String-Builder");

describe("05.StringBuilder function", () => {
    describe('constructor', () => {
        it('Test withh string', () => {
            let myObj = new StringBuilder('str');
            expect(myObj).to.have.property('_stringArray').with.lengthOf(3);
        });
        it('Test with empty value', () => {
            let myObj = new StringBuilder();
            expect(myObj).to.have.property('_stringArray').with.lengthOf(0);
        });
        it('Test with wrong parameter', () => {
            expect(() => new StringBuilder(1)).to.Throw('Argument must be string');
        });
    });
    describe('append', () => {
        it('Test invalid param', () => {
            let myObj = new StringBuilder('str');
            expect(() => myObj.append(1)).to.Throw('Argument must be string');
        });
        it('Test new length', () => {
            let myObj = new StringBuilder('Str');
            myObj.append('T');
            expect(myObj).to.have.property('_stringArray').with.lengthOf(4);
        });
        it('Test if added at the end', () => {
            let myObj = new StringBuilder('Str');
            myObj.append('T');
            expect(myObj._stringArray[3]).to.equal('T');
        });
    });
    describe('prepend', () => {
        it('Test invalid param', () => {
            let myObj = new StringBuilder('str');
            expect(() => myObj.prepend(1)).to.Throw('Argument must be string');
        });
        it('Test new length', () => {
            let myObj = new StringBuilder('Str');
            myObj.prepend('a');
            expect(myObj).to.have.property('_stringArray').with.lengthOf(4);
        });
        it('Test if added at the beginning', () => {
            let myObj = new StringBuilder('Str');
            myObj.prepend('a');
            expect(myObj._stringArray[0]).to.equal('a');
        });
    });
    describe('insertAt', () => {
        it('Test invalid param', () => {
            let myObj = new StringBuilder('str');
            expect(() => myObj.insertAt(1, 1)).to.Throw('Argument must be string');
        });
        it('Test new length', () => {
            let myObj = new StringBuilder('ab');
            myObj.insertAt('TEST', 1);
            expect(myObj).to.have.property('_stringArray').with.lengthOf(6);
        });
        it('Test if the string is inserted at index', () => {
            let myObj = new StringBuilder('ab');
            myObj.insertAt('TEST', 1);
            expect(myObj._stringArray[1]).to.equal('T');
        });
    });
    describe('remove', () => {
        it('Test new length', () => {
            let myObj = new StringBuilder('abc');
            myObj.remove(1, 1);
            expect(myObj).to.have.property('_stringArray').with.lengthOf(2);
        });
        it('Test result', () => {
            let myObj = new StringBuilder('abc');
            myObj.remove(1, 1);
            expect(myObj._stringArray.join('')).to.equal('ac');
        });
        it('Test result', () => {
            let myObj = new StringBuilder('abc');
            myObj.remove(1, 2);
            expect(myObj._stringArray.join('')).to.equal('a');
        });
    });
    describe('toString', () => {
        it('Test if joined', () => {
            let result = new StringBuilder('test');
            expect(result.toString()).to.equal('test');
        });
    });
    describe('Type of StringBuilder', () => {
        it('StringBuilder exist', () => {
            expect(StringBuilder).to.exist
        });
        it('StringBuilder type', () => {
            expect(typeof StringBuilder).to.equal('function');
        });
        it('should have the correct function properties', () => {
            assert.isFunction(StringBuilder.prototype.append);
            assert.isFunction(StringBuilder.prototype.prepend);
            assert.isFunction(StringBuilder.prototype.insertAt);
            assert.isFunction(StringBuilder.prototype.remove);
            assert.isFunction(StringBuilder.prototype.toString);
        });
        it('full test', () => {
            let str = new StringBuilder('hello');
            str.append(', there');
            str.prepend('User, ');
            str.insertAt('woop', 5);
            str.remove(6, 3);
            expect(str.toString()).to.equal('User,w hello, there');
        });
    });
});