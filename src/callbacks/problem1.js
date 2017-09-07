// Fix all the errors. It should print hello after 1 second

function shout(x) {
    console.log(x.toUppercase());
}

SetTimeout(shout("hello"), 1);