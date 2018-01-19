// Fix all the errors. It should print hello after 1 second
var x = "hello";
function shout() {
    console.log(x.toUpperCase());
}

setTimeout(shout, 1000);