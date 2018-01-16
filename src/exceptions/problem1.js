function first(arr) {
    // Throw an exception if the array has no elements
    // Otherwise return the first element
    if (arr == false) throw new Error('empty');
    else return arr[0];
}

function detective(i) {
    function suspect(i) {
        if (i * 7 % 3 == 0) throw new Error("Bad i!");
    }
    // detective checks to see if the suspect throws an exception on input i.
    // Returns "everything ok" if the suspect doesn't. 
    // Returns "something fishy" if the suspect does.

    try {
        suspect(i);
    } catch (i) {
        return "something fishy"
    }
    return 'everything ok'
};

function assignFlight(name) {
    var flightNumber = ((name.length * 7) % 20) + "0";
    var terrorSuspects = ["bob", "eric", "susie"];
    // if the name is a terror suspect, throw an exception
    // Otherwise, return the flight number
    for (let i = 0; i < terrorSuspects.length; i++) {
        if (name === terrorSuspects[i]) {
            throw new Error('terrorist detected')

        } else {
            return flightNumber;
        }
    }
}

module.exports = {
    first,
    detective,
    assignFlight
}