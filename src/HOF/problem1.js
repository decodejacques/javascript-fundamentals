function callNoException(f, arg) {
    try {
        f(arg);
        return f(arg);
    }
    catch(err) {
        return null;
    }
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

//
// if f(arg) returns null, throw an exception
    // otherwise return what f(arg) returned  
    // Example: 
    //  function nullZero(x) {
    //     if(x==0) return null;
    //     return x;
    //  }
    // callNoNull(nullZero, 0) throws an exception
    // callNoNull(nullZero, 12) returns 12
function callNoNull(f, arg) {
        var ret = f(arg);
        if(ret === null) throw new Error("oh no!");
        return ret
}



/* si callNoNull retourne une fonction :
function callNoNull(f, arg) {
    function g() {
        var ret = f(arg);
        if(ret === null) throw new Error("oh no!");
        return ret
    }
    return g;
}
*/

/*
function callNoNull(f, arg) {
    if(f(arg) === null) throw "arg is null";
    return f(arg);
    }
    
function nullZero(x) {
    if(x==0) return null;
    return x;
}
    
try {
    callNoNull(nullZero, 12)
    } catch(err) {
    console.log(err)
}
*/

//
function exceptionalize(f) { 
    return function(arg) {
        if (f(arg) == null) {throw 'arg is null';}
        else return f(arg);
    }
}

/*function exceptionalize(f) {
    return f();
}

function nullZero(x) {
    if(x==0) return null;
    return x;
}

function g(arg) {
    if(nullZero(arg) === "null") throw "arg is null";
    return g(arg)
}
*/

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


//
function nullify(f) {
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
    function g(arg) {
        try {
            return f(arg);
        } catch (err) {
            return null;
        }
    }
    return g;
}


//
function map(lst, f) {
    var ret = [];
    for (index in lst) {
      ret.push(f(lst[index]));
    }
    return ret;
  }
  
  function toUpperCase(str) { return str.toUpperCase(); }
  map(["bob", "susie"], toUpperCase)


  //

  function filter(lst, f) {
    var arr = [];
    for(var i = 0; i < lst.length; i++) {
      if(f(lst[i]) == true) {
        arr.push(lst[i]);
      }
  }
  return arr;
}

    // lst is an array and f is a function
    // f takes one argument and returns a boolean (true or false)
    // filter(lst, f) returns a list with all the elements of lst that does not satisfy f removed
    // filter(lst, f) has fewer elements than lst
    // if lst_ = filter(lst, f) and x is an element of lst_ it means that:
    //     x is an element of lst
    //     f(x) is true  
      
    // Example:
    // function isEven(x) {return x % 2 == 0;}
    // filter([1, 2, 3, 4, 5], isEven) returns [2,4];   

function every(lst, f) {
    // lst is an array and f is a function
    // f takes 1 arguments and returns a boolean
    // filter(lst, f) returns a true if f returns true for every element of lst
    
    // Example
    // every([2,4,12], x => x % 2 == 0) returns true
    // every([2,3,12], x => x % 2 == 0) returns false 
    for(var i = 0; i < lst.length; i++) {
        if(f(lst[i]) === false) {
            return false;
        }
        
    }  
    return true;  
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