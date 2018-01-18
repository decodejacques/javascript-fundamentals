// Fix all the errors. It should print hello after 1 second

function shout(x) {
    console.log(x.toLowerCase());
}

setTimeout(function() {shout("hello")}, 1000);