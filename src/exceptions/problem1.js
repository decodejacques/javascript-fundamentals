function first(arr) {
    // Throw an exception if the array has no elements
    // Otherwise return the first element
    if (arr.length === 0) {
        throw new Error("The array is empty");

    }
    return arr[0];

}

function detective(i) {
    function suspect(i) {
        if (i * 7 % 3 == 0) throw new Error("Bad i!");
        
    }
    try{
        suspect(i);
    }catch(err){
        return "something fishy";
    }
    return "everything ok";
}

function assignFlight(name) {
    var flightNumber = ((name.length * 7) % 20) + "0";
    var terrorSuspects = ["bob", "eric", "susie"];
    var found = false;
    // if the name is a terror suspect, throw an exception
    // Otherwise, return the flight number

    for (var i = 0; i <= terrorSuspects.length; i++) {
        found = false;
        if (name === terrorSuspects[i]) {
            found = true;
            //console.log(found);
            throw new Error(name + " is a terror suspect!");
        }
        

    }
    if (!found) return flightNumber;
}

module.exports = { first, detective, assignFlight }