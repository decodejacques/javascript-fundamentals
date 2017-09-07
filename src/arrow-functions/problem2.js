// Convert all the arrow functions to normal anonymous functions
// There should be no arrows by the end

var x = x => x + 1;
var y = (x, y) => x + y;
var z = x => {var y = (x * 7) % 2; return y * 2};

module.exports = {x, y, z};


