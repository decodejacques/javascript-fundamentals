var expect = require('chai').expect;

var greet = require('../../src/bind/problem1.js');

describe('bind', function() {
    it('the greet function should be bound to bob', function() {
        expect(greet()).to.eql("I'm Bob");
    });
});