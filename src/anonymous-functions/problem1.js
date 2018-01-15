// fix all the errors
const x = 6;
const y = 8;

function c(g, h) {
    var x = g(6);
    var y = h(8);
    return [x, y];
}

function t() {
    return c(function g(x) {return x + 1}, 
             function h(y) {return y * 2});
}

module.exports = t;