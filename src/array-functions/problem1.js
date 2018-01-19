

function removeEvens(lst) {
    oddArr = lst.filter(x => x % 2 !==0)
    return oddArr;


    // lst is an array of numbers
    // Returns a new list with all the even numbers of lst removed
}

function keepLong(lst) {

    longLst = lst.filter(x => x.length >5)
    return longLst;
    // lst is an array of strings
    // Returns a new list with all the elements of lst that are length greater than 5
}

function greet(lst) {
    helloArr = lst.map(x => "Hello " + x)
    return helloArr;
    // lst is an array of strings
    // Adds "Hello " to every element of greet
    // For example: greet(["bob", "eric"]) returns ["Hello bob", "Hello eric"]
}

function greetLong(lst) {

    longArr = lst.filter(x => x.length >3).map(x => "Hello " + x);
    return longArr;
    // lst is an array of strings
    // Only greet people who's names have length at least 4.
    // Otherwise ignore them completely.
    // For example: greeLong(["bob", "daniel"]) returns ["Hello daniel"]
}

function allLong(lst) {
    return lst.every(x => x.length >4);





    // lst is an array of strings
    // Returns true if every element of lst is of length at least 5. Otherwise returns false.
}

module.exports = {removeEvens, keepLong, greet, greetLong, allLong};