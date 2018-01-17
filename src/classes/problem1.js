class Dog {
    constructor(age, name, breed) {
        this.age = age;
        this.name = name;
        this.breed = breed;
        this.bark = () => "woof";
    }
    // Dog has a constructor with three arguments (in this order): age, name and breed
    // Dog has three attributes: age, name and breed
    // Dog has a method bark, which returns a string    
}

module.exports = Dog;