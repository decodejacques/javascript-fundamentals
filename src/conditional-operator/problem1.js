//Remove the if statements from these functions.
//Replace them with the conditional operator


function desirability(x) {
    if(x == 'Brad Pitt') {
        return "very desirable";
    } else {
        return "not so desirable";
    }
}

function broadenHorizon(x) {
    if(x == 'Brad Pitt') {
        return "very desirable";
    } else if(x == 'Angelina Jolie') {
        return "also desirable";
    } else {
        return "not desirable";
    }
}

module.exports = {desirability, broadenHorizon}