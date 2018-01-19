//Remove the  statements from these functions.
//Replace them with the conditional operator



function desirability(x) {
    return x === "Brad Pitt"? "very desirable": "not so desirable"}

function broadenHorizon(x) {
   return x === "Brad Pitt"? "very desirable": x === "Angelina Jolie"? 
    "also desirable": "not desirable"}



module.exports = {desirability, broadenHorizon}