// Fix all the errors. It should print hello after 1 second

function shout(x) {
    console.log(x.toLowerCase());
}

setTimeout(shout, 1000, "hello");