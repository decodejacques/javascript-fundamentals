// Fix all the errors. It should print hello after 1 second

function shout(x) {
    console.log(x.toUppercase());
}

setTimeout(function() {
    console.log("hello".toUpperCase())}, 1000);
    