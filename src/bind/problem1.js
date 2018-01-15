var bob = {name: "Bob"};
function greet() {
    return "I'm " + this.name;
}

var greet = greet.bind(bob);

module.exports = greet;