// fix all the errors
function c(g, h) {
    var x = g(6);
    var y = h(8);
    return [x, y];
}

function t() {
    return c(
    function g(y) {
        return y + 1
    },
    
    function h(x) {
        return x * 2
    });
}



module.exports = t;