// Convert all the arrow functions to normal anonymous functions
// There should be no arrows by the end

var x = function(x) {
    return x + 1;
}

var y = function(x, y) {
    return x + y;
}

var z = function(x){
    var y = (x * 7) % 2; return y * 2
}

module.exports = {x, y, z};


