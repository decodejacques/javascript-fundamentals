// Add a function to all arrays called isNotEmpty
// isNotEmpty returns true is the array is empty, false otherwise

Array.prototype.isNotEmpty = function () {
    if (this.length === 0) {return false;}
    else return true;}