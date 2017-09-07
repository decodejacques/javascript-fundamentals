// Fix all the errors in this program
var dog = {breed: "schnitzel"};
function greet() {
    return "I'm a" + this.bred;
}

greet.bind(breed);

module.exports = {greet};