var bob = {name: "Bob"};
function greet() {
    return "I'm " + this.name;
}
// bind greet to bob

var greet = greet.bind(bob);


module.exports = greet;