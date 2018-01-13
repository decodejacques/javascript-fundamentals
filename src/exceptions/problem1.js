function first(arr) {
    if (arr.length === 0) {throw "this array is empty";}
    return arr[0];
}

function detective(i) {
    function suspect(i) {
        if(i * 7 % 3 == 0) throw new Error("Bad i!");
    }
    try {suspect(i);}
    catch(err) {
        return('something fishy');
    }
    return 'everything ok';
}

function assignFlight(name) {
    var flightNumber = ((name.length * 7) % 20) + "0";
    var terrorSuspects = ["bob", "eric", "susie"];
    if(name == terrorSuspects[0] || name == terrorSuspects[1] || name == terrorSuspects[2]) {throw "suspect alert!";}
    else return flightNumber;
}

module.exports = {first, detective, assignFlight}