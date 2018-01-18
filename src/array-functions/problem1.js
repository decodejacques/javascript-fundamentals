function removeEvens(lst) {
    // lst is an array of numbers
    // Returns a new list with all the even numbers of lst removed
    return lst.filter(e => e % 2 !== 0);
}

function keepLong(lst) {
    // lst is an array of strings
    // Returns a new list with all the elements of lst that are length greater than 5
    return lst.filter(e => e.length > 5);
}

function greet(lst) {
    // lst is an array of strings
    // Adds "Hello " to every element of greet
    // For example: greet(["bob", "eric"]) returns ["Hello bob", "Hello eric"]
    return lst.map(e => "Hello " + e);
}

function greetLong(lst) {
    // lst is an array of strings
    // Only greet people who's names have length at least 4.
    // Otherwise ignore them completely.
    // For example: greeLong(["bob", "daniel"]) returns ["Hello daniel"]
    return lst
            .map(e => { if (e.length >= 4) { return "Hello " + e }})
            .filter(e => e !== undefined);
}

function allLong(lst) {
    // lst is an array of strings
    // Returns true if every element of lst is of length at least 5. Otherwise returns false.
    return lst.every(e => e.length >= 5);
}

module.exports = {removeEvens, keepLong, greet, greetLong, allLong};