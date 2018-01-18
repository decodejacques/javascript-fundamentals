class Dog {

    constructor(age, name, breed){

        this.age = age;
        this.name = name;
        this.breed = breed;
    }
    
    bark(){
        return "woof!";
    }
      
}

module.exports = Dog;