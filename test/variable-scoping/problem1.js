var expect = require('chai').expect;

var f = require('../../src/variable-scoping/problem1.js');

describe('f', function() {
    it('returns 1 the first time', function() {
        expect(f()).to.eq(1);
    });
    it('returns 2 the second time', function() {
        expect(f()).to.eq(2);
    });
    it('returns 3 the third time', function() {
        expect(f()).to.eq(3);
    });
});
