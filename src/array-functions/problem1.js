// You are not allowed to use a for loop or a while loops for any of these questions. Instead, use filter, map, etc...

function removeEvens(lst) {
    var result = [];
    for (var i = 1; i < lst.length; i++) {
        if (lst[i] % 2 != 0) {
            //console.log(lst[i]);
            result.push(lst[i]);
            //console.log("this is " + result);
        }
    }
    return result;
    // lst is an array of numbers
    // Returns a new list with all the even numbers of lst removed
}

function keepLong(lst) {
    // console.log(lst);
    var longLst = lst.filter( x => x.length > 5);
    // console.log(longLst);
    return longLst;
}

function greet(lst) {
    // lst is an array of strings
    // console.log(lst);
    // Adds "Hello " to every element of greet
    // For example: greet(["bob", "eric"]) returns ["Hello bob", "Hello eric"]
    var hola = lst.map((x) => { var y = "Hello " + x; return y })
    return hola;
}

function greetLong(lst) {
    // lst is an array of strings
    // Only greet people who's names have length at least 4.
    // Otherwise ignore them completely.
    // For example: greeLong(["bob", "daniel"]) returns ["Hello daniel"]
    // filter then greet
    
    var filteredLst = lst.filter(x => x.length > 4);
    var result =  filteredLst.map(x => { var y = "Hello " + x; return y});
    return result;
}

function allLong(lst) {
    // lst is an array of strings
    // Returns true if every element of lst is of length at least 5. Otherwise returns false.
    // some every quesiton I think
    // console.log (lst);
    var a = lst.every((x) => {return x.length >= 5} );
    // console.log(a);
    return a;
}

module.exports = {removeEvens, keepLong, greet, greetLong, allLong};
