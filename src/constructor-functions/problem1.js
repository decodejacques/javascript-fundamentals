// Add a function to all arrays called isNotEmpty
// isNotEmpty returns true is the array is empty, false otherwise

var x = new Array();
Array.prototype.isNotEmpty = function() {
    if (this.length !== 0) return true;
    else return false;
}
