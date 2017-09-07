var bob = {name: "Bob"};
function greet() {
    return "I'm " + this.name;
}
// bind greet to bob

module.exports = {greet};