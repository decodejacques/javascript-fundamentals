// fix all the errors.
function c(g, h) {
    var x = g(6);
    var y = h(8, 10);
    return [x, y];
}

function t() {
    return c(g = (z) => z + 2, 
             h = (x,y) => x + y);
}

console.log(t()); // Test file isn't testing anything; but the output is [8, 18], as expected.

module.exports = t