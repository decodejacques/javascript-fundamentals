var expect = require('chai').expect;

var wmaa = require('../../src/this/problem1.js');

var bob = {age: 24, wmaa};

describe('whatsMyAgeAgain', function() {
    it('returns 18 when this is undefined', function() {
        expect(wmaa()).to.eq(18);
    });
    it('other returns this.age', function() {
        expect(bob.wmaa()).to.eq(24);
    });
});
