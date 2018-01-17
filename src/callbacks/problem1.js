// Fix all the errors. It should print hello after 1 second

function shoutLoudly(x) {
    console.log(x.toUpperCase())
}

function shout() {
    return shoutLoudly("hello");
}

setTimeout(shout, 1000);

/* function shout(x) {
    console.log(x.toUppercase());
}

SetTimeout(shout("hello"), 1); */