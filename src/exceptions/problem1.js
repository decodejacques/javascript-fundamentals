function first(arr) {
    // Throw an exception if the array has no elements
    // Otherwise return the first element
    if (arr.length === 0) {
        throw 500;
    } else {
        return arr[0]
    }

}

function detective(i) {

    try {
        suspect(i);
    } catch (err) {
        var a = "something fishy";
        return a;
    }

    function suspect(i) {
        if (i * 7 % 3 == 0) throw new Error("Bad i!");
    }
    var b = "everything ok";
    return b;

    // detective checks to see if the suspect throws an exception on input i.
    // Returns "everything ok" if the suspect doesn't. 
    // Returns "something fishy" if the suspect does.
}

function assignFlight(name) {
    var flightNumber = ((name.length * 7) % 20) + "0";
    var terrorSuspects = ["bob", "eric", "susie"];
    // if the name is a terror suspect, throw an exception
    // Otherwise, return the flight number
    var noFly = true;
    for (var i = 0; i < terrorSuspects.length; i++) {
        if (name === terrorSuspects[i]) {
            throw new Error("terrorist");
        } else {
            noFly = false;
        }
    }

    return flightNumber;
}


module.exports = { first, detective, assignFlight };