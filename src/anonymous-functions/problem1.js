// fix all the errors
const x = 6;
const y = 8;

function c(g, h) {
    var a = g(x);
    var b = h(y);
    return [a, b];
}

function t() {
    return c(function g(x) {return x + 1}, 
             function h(y) {return y * 2});
}

console.log(t());

module.exports = t;