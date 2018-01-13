
function callNoException(f, arg) {

    try {
        return f(arg);
    }
    catch(err) {
        return null;
    }
    // if f(arg) throws an exception, return null
    // otherwise return what f(arg) returned
    // Example:
    //  function throwsZero(x){
    //     if(x==0) throw new Error("woops");
    //     return x;
    //  }
    //  callNoException(throwsZero, 0) returns null
    //  callNoException(throwsZero, 12) returns 12
}

function callNoNull(f, arg) {
    if (f(arg) == null) {
        throw new Error("f(arg) is not null");
    }
    return f(arg);
    // if f(arg) returns null, throw an exception
    // otherwise return what f(arg) returned  
    // Example: 
    //  function nullZero(x) {
    //     if(x==0) return null;
    //     return x;
    //  }
    // callNoNull(nullZero, 0) throws an exception
    // callNoNull(nullZero, 12) returns 12
    
    
}

function exceptionalize(f) {

    var k = function(arg){
        if (f(arg) == null) {
            throw new Error("f(arg) is null")
        }
        return f(arg);
    }
    return k;

    // returns a new function
    // this function takes 1 input, called arg
    // if f(arg) is null, this new function throws an exception
    // otherwise it returns what f(arg) returned
    // difference with callNoNull: callNoNull doesn't return a function
    // Example: 
    //  function nullZero(x) {
    //     if(x==0) return null;
    //     return x;
    //  }
    // exceptionalize(nullZero) returns a function g such that
    // g(0) throws an exception
    // g(12) returns 12

}

function nullify(f) {

    var k = function(arg) {
        try {
            f(arg);
        }
        catch(err) {
            return null;
        }
        return f(arg);
    }
    return k;
    // returns a new function
    // this function takes 1 input, called arg
    // if f(arg) throws an exception, this new function returns null
    // otherwise it returns what f(arg) returned
    // Example
    //  function throwsZero(x){
    //     if(x==0) throw new Error("woops");
    //     return x;
    //  }
    //  nullify(throwsZero) returns a function g such that
    //  g(0) returns null
    //  g(12) throws an exception
    
}

function map(lst, f) {

    var arr = [];

    for (var i = 0; i < lst.length; i++) {
        arr.push(f(lst[i]));
    }

    return arr;
    // lst is an array and f is a function
    // map returns an array with the same number of elements as lst
    // if lst = [a1, a2, a3, a4, a5] then map(lst, f) returns [f(a1), f(a2), f(a3), f(a4), f(a5)]
    // map returns a new array created by applying f
    //   to the elements of the original array
    //
    // Example
    //
    // function toUpperCase(str) { return str.toUpperCase(); }
    // map(["bob", "susie"], toUpperCase) returns ["BOB", "SUSIE"]
}

function filter(lst, f) {
    var arr = [];

    for (var i = 0; i < lst.length; i++) {
        if (f(lst[i])) {
            arr.push(lst[i])
        }
    }

    return arr;
    // lst is an array and f is a function
    // f takes one argument and returns a boolean (true or false)
    // filter(lst, f) returns a list with all the elements of lst that does not satisfy f removed
    // filter(lst, f) has fewer elements than lst
    // if lst_ = filter(lst, f) and x is an element of lst_ it means that:
    //     x is an element of lst
    //     f(x) is true  
    //   
    // Example:
    // function isEven(x) {return x % 2 == 0;}
    // filter([1, 2, 3, 4, 5], isEven) returns [2,4];   
}

function every(lst, f) {

    var out = true;

    for (var i = 0; i < lst.length; i++) {
        if (f(lst[i]) == false) {
            var out = false;
        }
    }

    return out;
    // lst is an array and f is a function
    // f takes 1 arguments and returns a boolean
    // filter(lst, f) returns a true if f returns true for every element of lst
    
    // Example
    // every([2,4,12], x => x % 2 == 0) returns true
    // every([2,3,12], x => x % 2 == 0) returns false    
}


module.exports = {
    callNoException, 
    callNoNull,
    exceptionalize, 
    nullify,
    map, 
    filter, 
    every
};
