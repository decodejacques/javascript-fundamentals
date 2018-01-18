function removeEvens(lst) {
    return lst.filter((a) => a%2 !== 0)
    // lst is an array of numbers
    // Returns a new list with all the even numbers of lst removed
}

function keepLong(lst) {
    return lst.filter((a) => a.length > 5)
    // lst is an array of strings
    // Returns a new list with all the elements of lst that are length greater than 5
}

function greet(lst) {
    return lst.map((a) => 'Hello '+a)
    // lst is an array of strings
    // Adds "Hello " to every element of greet
    // For example: greet(["bob", "eric"]) returns ["Hello bob", "Hello eric"]
}

function greetLong(lst) {
    return lst.filter((a) => a.length >= 4).map((a) => 'Hello '+a)
    // lst is an array of strings
    // Only greet people who's names have length at least 4.
    // Otherwise ignore them completely.
    // For example: greeLong(["bob", "daniel"]) returns ["Hello daniel"]
}

function allLong(lst) {
    return lst.every((a) => a.length >= 5)
    // lst is an array of strings
    // Returns true if every element of lst is of length at least 5. Otherwise returns false.
}

module.exports = {removeEvens, keepLong, greet, greetLong, allLong};