// Remove the conditional operator from these functions
// Replace them with if statements

function iLike(x) {
    if (x == 'chinese food') {return true;}
    else return false;
}

function iLikeLessPicky(x) {
    if (x == 'chinese food') {return true;}
    else if (x == 'french food') {return true;}
    else return false
}

module.exports = {iLike, iLikeLessPicky};