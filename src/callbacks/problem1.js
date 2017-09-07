// Fix all the errors. It should print HELLO once every second

function shout(x) {
    console.log(x.toUppercase());
}

SetTimeout(shout("hello"), 1);