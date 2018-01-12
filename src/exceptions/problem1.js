function first(arr) {
    if (arr.length == 0) {
        throw new Error("No elements");
    } else {
        return arr[0];
    }

}

function detective(i) {
    function suspect(i) {
        if(i * 7 % 3 == 0) throw new Error("Bad i!");
    }

    try {
        suspect(i) 
        return "everything ok";
    }
    catch(e) {
        return "something fishy";
    }
}

function assignFlight(name) {
    var flightNumber = ((name.length * 7) % 20) + "0";
    var terrorSuspects = ["bob", "eric", "susie"];

    for (var i = 0; i < terrorSuspects.length; i++) {
        if (name == terrorSuspects[i]) {
            throw new Error("Terrorist!");
        }
        return flightNumber;
    }
    // if the name is a terror suspect, throw an exception
    // Otherwise, return the flight number
}

module.exports = {first, detective, assignFlight}