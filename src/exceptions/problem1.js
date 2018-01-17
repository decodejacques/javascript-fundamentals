function first(arr) {
    // Throw an exception if the array has no elements
    // Otherwise return the first element

    /* ...Can't use a ternary operator to throw an exception, for some reason... 
       "[Js] Expression expected" on keyword 'throw'.
    */
        if(arr.length <= 0) {
            throw new Error("Array is empty!");
        } else {
            return arr[0]
        };
}

function detective(i) {
    function suspect(i) {
        if(i * 7 % 3 == 0) throw new Error("Bad i!");
    }
    // detective checks to see if the suspect throws an exception on input i.
    // Returns "everything ok" if the suspect doesn't. 
    // Returns "something fishy" if the suspect does.
    try {
        suspect(i);
    } catch(err) {
        return "something fishy";
    }
    return "everything ok";
}

function assignFlight(name) {
    var flightNumber = ((name.length * 7) % 20) + "0";
    var terrorSuspects = ["bob", "eric", "susie"];
    // if the name is a terror suspect, throw an exception
    // Otherwise, return the flight number
    /* ...Can't use a ternary operator to throw an exception, for some reason... 
       "[Js] Expression expected" on keyword 'throw'.
    */
    if (terrorSuspects.includes(name)) {
        throw new Error("Name is on blacklist!");
    } else {
        return flightNumber;
    }
}

module.exports = {first, detective, assignFlight}