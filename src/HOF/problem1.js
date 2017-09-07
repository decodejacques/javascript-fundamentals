
function callNoException(f, arg) {
    // if f(arg) throws an exception, return null
    // otherwise return what f(arg) returned
}

function callNoNull(f, arg) {
    // if f(arg) returns null, throw an exception
    // otherwise return what f(arg) returned    
}

function exceptionalize(f) {
    // returns a new function
    // this function takes 1 input, called arg
    // if f(arg) is null, this new function throws an exception
    // otherwise it returns what f(arg) returnedd
}

function nullify(f) {
    // returns a new function
    // this function takes 1 input, called arg
    // if f(arg) throws an exception, this new function returns null
    // otherwise it returns what f(arg) returnedd
}

function map(lst, f) {
    // lst is an array and f is a function
    // map returns an array with the same number of elements as lst
    // if lst = [a1, a2, a3, a4, a5] then map(lst, f) returns [f(a1, a2, a3, a4, a5)]
    // map returns a new array created by applying f
    //   to the elements of the original array
    //
    // Example
    //
    // function toUpperCase(str) { return str.toUpperCase(); }
    // map(["bob", "susie"], toUpperCase) returns ["BOB", "SUSIE"]
}

function filter(lst, f) {
    // lst is an array and f is a function
    // filter(lst, f) returns a new array that has the elements of lst except that
    
    // if filter(lst, f) = lstPrime then:
    
    // 
    // if lst = [a1, a2, a3, a4, a5] then map(lst, f) returns [f(a1, a2, a3, a4, a5)]
    // Basically, map returns a new array created by applying f
    //   to the elements of the original array
}

function every(lst, f) {
    // lst is an array and f is a function
    // f takes 1 arguments and returns a boolean
    // filter(lst, f) returns a true if f returns true for every element of lst
    
    // Example
    // every([2,4,12], x => x % 2 == 0) returns true
    // every([2,3,12], x => x % 2 == 0) returns false
    
}


module.exports = {callNoException, callNoNull, exceptionalize, nullify, map, filter, every};