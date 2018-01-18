function iLike(x) { return x === 'chinese food' }

function iLikeLessPicky(x) { return x === 'chinese food' || x === 'french food' }

module.exports = {iLike, iLikeLessPicky};