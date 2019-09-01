// Fix all the errors in this program
var dog = {breed: "schnitzel"};
var greet = function() {
    return "I'm a " + this.breed;
}

greet = greet.bind(dog);

module.exports = greet;