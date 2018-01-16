var bob = {name: "Bob"};
var greet = function() {
    return "I'm " + this.name;
}
// bind greet to bob
greet = greet.bind(bob);
module.exports = greet;