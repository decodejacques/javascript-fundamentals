function removeEvens(lst) {

    var newLst = [];

    for (var x = 0; x < lst.length; x++) {
        if (lst[x] % 2 !== 0) {
            newLst.push(lst[x])

        }

    }

    return newLst;

    // lst is an array of numbers
    // Returns a new list with all the even numbers of lst removed
}

function keepLong(lst) {

    var newArray = []

    for (var x = 0; x < lst.length; x++){
        if(lst[x].length > 5){
            newArray.push(lst[x])
        }

    }
    return newArray;
    // lst is an array of strings
    // Returns a new list with all the elements of lst that are length greater than 5
}

function greet(lst) {
    var newArr = []
    var hello = "Hello ";
    for (let index = 0; index < lst.length; index++) {
        newArr.push(hello.concat(lst[index]));
    }
    
    return newArr
    // lst is an array of strings
    // Adds "Hello " to every element of greet
    // For example: greet(["bob", "eric"]) returns ["Hello bob", "Hello eric"]
}

function greetLong(lst) {

    var longLst = [];
    var hello = "Hello "

    for (let index = 0; index < lst.length; index++) {
        
        if (lst[index].length >=4 ) {
            longLst.push(hello + lst[index])
            }
    }

    return longLst;
    // lst is an array of strings
    // Only greet people who's names have length at least 4.
    // Otherwise ignore them completely.
    // For example: greeLong(["bob", "daniel"]) returns ["Hello daniel"]
}

function allLong(lst) {
    
   for (let index = 0; index < lst.length; index++) {
       if (lst[index].length >= 5){
           true
       } else {return false}
   }

   return true;
    // lst is an array of strings
    // Returns true if every element of lst is of length at least 5. Otherwise returns false.
}

module.exports = {removeEvens, keepLong, greet, greetLong, allLong};