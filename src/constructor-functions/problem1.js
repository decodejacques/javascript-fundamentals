// Add a function to all arrays called isNotEmpty
// isNotEmpty returns true is the array is empty, false otherwise

// since it has to be on all arrays it needs to be in the prorotype. Then since I will want it to be based on the Array being passe din I have to use "this.length" I had look at slide 352 to understand, which had --
// var x = new Array();
// var y = [1];
// Array.prototype.isEmpty = function() { return this.length == 0; }
// console.log(x.isEmpty());


Array.prototype.isNotEmpty = function () {
    //console.log(this.length);
    if (this.length == 0) {
        return false;
    } else {
        
        //console.log("I always run this");
        return true;
    }
}