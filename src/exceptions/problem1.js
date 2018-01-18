function first(arr) {
    if(Array.isArray(arr) === false) {
        throw new Error("it's not an array")
        } else if(arr.length === 0) {
            throw new Error("empty array");
        } else return arr[0]
    }
    try {
        first([1,2]) 
    } catch(err) {
        console.log(err)
    }
    // Throw an exception if the array has no elements
    // Otherwise return the first element

function detective(i) {
    function suspect(i) {
        if(i * 7 % 3 == 0) throw new Error("Bad i!");
    }
    if(suspect(i) !== "Bad i!") return "everything is ok"
 }  
   
try {
    detective();
    return "everything is ok"
    } catch(err) {
        return "something fishy"
}
    // detective checks to see if the suspect throws an exception on input i.
    // Returns "everything ok" if the suspect doesn't. 
    // Returns "something fishy" if the suspect does.


function assignFlight(name) {
    var flightNumber = ((name.length * 7) % 20) + "0";
    var terrorSuspects = ["bob", "eric", "susie"];
    for (var i = 0; i < terrorSuspects.length; i++) {
        if(name === terrorSuspects[0] || name === terrorSuspects[1] || name === terrorSuspects[2]) {
        throw new Error("He is suspect")
        } else return flightNumber
    }
    // if the name is a terror suspect, throw an exception
    // Otherwise, return the flight number
}

module.exports = {first, detective, assignFlight}