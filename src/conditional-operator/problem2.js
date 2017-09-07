// Remove the conditional operator from these functions
// Replace them with if statements

function iLike(x) {
    return x == 'chinese food' ? true : false;
}

function iLikeLessPicky(x) {
    return x == 'chinese food' ? true : x == 'french food' ? true : false;
}

function iLikeVocalized(x) {
    console.log(x == 'chinese food' ? 'yes!' : 'no way!');
}
