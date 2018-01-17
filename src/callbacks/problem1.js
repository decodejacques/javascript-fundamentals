// Fix all the errors. It should print hello after 1 second

function shoutLoudly(x) {
    x = x.toUpperCase();
    console.log(x)
}

function shout() {
    return shoutLoudly("hello");
}

setTimeout(shout, 1000);

/* function shout(x) {
    console.log(x.toUppercase());
}

SetTimeout(shout("hello"), 1); */