var expect = require('chai').expect;



var arrfuncs = require('../../src/array-functions/problem1.js');

describe('array functions', function() {
    it('removeEvens expected to remove the even numbers', function() {
        expect(arrfuncs.removeEvens([2,3,4,5])).to.eql([3, 5]);
    });
    it('keepLong expected to only keep the long strings', function() {
        expect(arrfuncs.keepLong(["ab", "abc", "abcd", "abcde", "abcdef"])).to.eql(["abcdef"]);
    });
    it('greet expected to add Hello to every element', function() {
        expect(arrfuncs.greet(["Bob", "Susie"])).to.eql(["Hello Bob", "Hello Susie"]);
    });
    it('greetLong expected to add Hello to every element', function() {
        expect(arrfuncs.greetLong(["Bob", "Susie"])).to.eql(["Hello Susie"]);
    });
    
    it('allLong returns false if there is a short name', function() {
        expect(arrfuncs.allLong(["Eric", "Peter"])).to.eq(false);
    });
    it('allLong returns true if all the names are long', function() {
        expect(arrfuncs.allLong(["Thomas", "Peter"])).to.eq(true);
    });

});