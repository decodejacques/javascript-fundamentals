// fix all the errors
function c(g, h) {
    var x = g(6); //sets g function with parameter 6 to the x variable
    var y = h(8); // sets h function with parameter 8 to the y variable
    return [x, y]; // returns an array with the variables x and y as parameters or return [g(6),h(8)]
}

function t() {
    return c(function g(x) {return x + 1}, function h(x) {return x * 2});
}

module.exports = t;