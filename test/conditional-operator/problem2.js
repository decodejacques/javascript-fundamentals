var expect = require('chai').expect;

var funcs = require('../../src/conditional-operator/problem2.js');


var fs = require('fs')
var source = fs.readFileSync(__dirname + '/../../src/conditional-operator/problem2.js').toString();

describe('source file', function() {
    it('source file should not contain the conditional operator', function() {
        expect(source.indexOf('?')).to.eq(-1);
    });
});

describe('iLike', function() {
    it('I like chinese food', function() {
        expect(funcs.iLike('french food')).to.eq(false);
    });
    it("I don't like other food", function() {
        expect(funcs.iLike('chinese food')).to.eq(true);
    });
});

describe('iLikeLessPicky', function() {
    it('I like chinese food', function() {
        expect(funcs.iLikeLessPicky('chinese food')).to.eq(true);
    });
    it('I also like french food', function() {
        expect(funcs.iLikeLessPicky('french food')).to.eq(true);
    });
    it("I don't like other foods", function() {
        expect(funcs.iLikeLessPicky('korean food')).to.eq(false);
    });
});
