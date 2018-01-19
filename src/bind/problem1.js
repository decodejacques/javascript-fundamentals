var bob = {name: "Bob"};
function greet() {
    return "I'm " + this.name;
}
green = greet.bind(bob);
// bind greet to bob

module.exports = green;