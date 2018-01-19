// Add a function to all arrays called isNotEmpty
// isNotEmpty returns true is the array is empty, false otherwise


Array.prototype.isNotEmpty = isNotEmpty


function isNotEmpty(){
    if (this.length <1){return false}
    return true;
}



