// Fix all the errors. It should print hello after 1 second

function shout(x) {
    console.log(x.toUpperCase());
}

function f() {
    shout('hello');
}

setTimeout(f, 1000);