// Add a function to all arrays called isNotEmpty
// isNotEmpty returns true is the array is empty, false otherwise
var x = new Array();
Array.prototype.isNotEmpty = function () { return this.length !== 0; }
console.log(x.isNotEmpty())
x.push(0);
console.log(x.isNotEmpty())