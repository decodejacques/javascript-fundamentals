function removeEvens(lst) {
    var arr = [];
    for (var i = 0; i < lst.length; i++) {
        if(lst[i] % 2 === 1) arr.push(lst[i])
    }
    return arr;
    // lst is an array of numbers
    // Returns a new list with all the even numbers of lst removed
}

function keepLong(lst) {
    var arr = [];
    for (var i = 0; i < lst.length; i++) {
        if(lst[i].length > 5) arr.push(lst[i]) 
    }
    return arr;
    // lst is an array of strings
    // Returns a new list with all the elements of lst that are length greater than 5
}

function greet(lst) {
    var x = lst.map(function(i) {return "Hello " + i});
    return x;
    }
    // lst is an array of strings
    // Adds "Hello " to every element of greet
    // For example: greet(["bob", "eric"]) returns ["Hello bob", "Hello eric"]

function greetLong(lst) {
    var arr = [];
    for (var i = 0; i < lst.length; i++) {
        if(lst[i].length > 3) arr.push(lst[i]) 
    }
    var x = arr.map(function(i) {return "Hello " + i});
    return x
    // lst is an array of strings
    // Only greet people who's names have length at least 4.
    // Otherwise ignore them completely.
    // For example: greeLong(["bob", "daniel"]) returns ["Hello daniel"]
}

function allLong(lst) {
    for (i of lst) {
        return i.length >= 5 ? true : false;
    }
    // lst is an array of strings
    // Returns true if every element of lst is of length at least 5. Otherwise returns false.
}

module.exports = {removeEvens, keepLong, greet, greetLong, allLong};