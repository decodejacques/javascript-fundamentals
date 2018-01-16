// fix all the errors
var y = 6;
var x = 8;

var c = function c(g, h) {
    var x = g(y);
    var y = h(x);
    return [x, y];
}

function t() {
    return c(function g(x) {return y + 1}, function h(y) {return x * 2});
}

module.exports = t;