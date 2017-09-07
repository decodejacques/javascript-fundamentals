var expect = require('chai').expect;

var funcs = require('../../src/constructor-functions/problem1.js');

describe('isNotEmpty', function() {
    it('returns false for empty arrays', function() {
        expect([].isNotEmpty()).to.eq(false);
    });
    it('returns true for non empty arrays', function() {
        expect([1, 2].isNotEmpty()).to.eq(true);
    });
});
