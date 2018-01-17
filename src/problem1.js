// Fix all the errors. It should print hello after 1 second
let myString = "hello";
function shout(x) { console.log(this.sayWhaaat) }
setTimeout(shout.bind({sayWhaaat: myString}), 1000);