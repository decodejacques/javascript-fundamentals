


function desirability(x) {
   var y = x == 'Brad Pitt' ? "very desirable" : "not so desirable";
   return y;
}


function broadenHorizon(x) {
    var y = x == 'Brad Pitt'? "very desirable" : x == 'Angelina Jolie'? "also desirable" : "not desirable";
    return y;
}

module.exports = {desirability, broadenHorizon}