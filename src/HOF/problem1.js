
function callNoException(f, arg) {
    try {
        f(arg);
        return f(arg);
    }
    catch(err) {return null;}
}

function callNoNull(f, arg) {
    if (f(arg) == null) {throw 'this is null';}
    else return f(arg);
}

function exceptionalize(f) {
   return function(arg) {
        if (f(arg) == null) {throw 'f(arg) is null';}
        else return f(arg);
    }
}

function nullify(f) {
    return function(arg) {
        try {f(arg);}
        catch(err) {return null;}
        return f(arg);
    }
}

function map(lst, f) {
    var newArr = [];
    for (var i=0; i<lst.length; i++) {
        newArr.push(f(lst[i]));
    }
    return newArr;
}

function filter(lst, f) {
    var newArr = [];
    for (var i=0; i<lst.length; i++) {
        if (f(lst[i]) == true) {newArr.push(lst[i]);}
    }
    return newArr;
}

function every(lst, f) {
    for (var i=0; i<lst.length; i++) {
        if (f(lst[i]) == false) {return false;}
    }
    return true;}


module.exports = {
    callNoException, 
    callNoNull,
    exceptionalize, 
    nullify,
    map, 
    filter, 
    every
};
