

var results = [
    "very desirable",
    "also desirable",
    "not desirable",
    "not so desirable"
];

var desirability = (x) => x === "Brad Pitt" ? results[0] : results[3]
var broadenHorizon = (x) => x === "Brad Pitt" ? results[0] : x === "Angelina Jolie" ? results[1] : results[2]

module.exports = {desirability, broadenHorizon}