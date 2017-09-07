var expect = require('chai').expect;

var greet = require('../../src/bind/problem2.js');

describe('bind', function() {
    it('the greet function should be bound to the dog', function() {
        expect(greet()).to.eql("I'm a schnitzel");
    });
});