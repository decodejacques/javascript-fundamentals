var bob = {name: "Bob"};

function greet() {
    return "I'm " + this.name;
}

 var greet = greet.bind(bob);


// bind greet to bob

module.exports = greet;