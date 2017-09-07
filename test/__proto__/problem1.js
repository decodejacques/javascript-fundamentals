var expect = require('chai').expect;



var objects = require('../../src/__proto__/problem1.js');

describe('__proto__', function() {
    it('The child should have the parent as its __proto__ ', function() {
        expect(objects.child.__proto__).to.equal(objects.parent);
    });

});