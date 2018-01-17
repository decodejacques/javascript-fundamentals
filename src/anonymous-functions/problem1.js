// fix all the errors

function c(g, h) {
    var x = g(6);
    var y = h(8);
    return [x, y];
}

function t() {
<<<<<<< HEAD
    return c((function g(x) {return x + 1}), (function h(y) {return y * 2}));
=======
    return c(function (x) {return y + 1}, function (y) {return x * 2});
>>>>>>> upstream/master
}

module.exports = t;
