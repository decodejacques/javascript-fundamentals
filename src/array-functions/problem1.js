function removeEvens(lst) {
    // lst is an array of numbers
    // Returns a new list with all the even numbers of lst removed
    // let newLst = [];
    // for(i of lst) {
    //     if(i % 2 !== 0) {
    //         newLst.push(i);
    //     }
    // }
    // return newLst;
    return lst.filter(element => {
        if (element % 2 !== 0) return element
    })
}

function keepLong(lst) {
    // lst is an array of strings
    // Returns a new list with all the elements of lst that are length greater than 5
    // let newLst = [];
    // for (let i of lst) {
    //     if (i.length > 5) {
    //         newLst.push(i);
    //     }
    // }
    // return newLst;
    return lst.filter(element => {
        if (element.length > 5) {
            return element;
        }
    })
}

function greet(lst) {
    // lst is an array of strings
    // Adds "Hello " to every element of greet
    // For example: greet(["bob", "eric"]) returns ["Hello bob", "Hello eric"]\
    // let newLst = [];
    // for (let i of lst) {
    //     newLst.push(`Hello ${i}`);
    // }
    // return newLst;
    return lst.map(element => `Hello ${element}`)

}

function greetLong(lst) {
    // lst is an array of strings
    // Only greet people who's names have length at least 4.
    // Otherwise ignore them completely.
    // For example: greeLong(["bob", "daniel"]) returns ["Hello daniel"]
    // let newLst = [];
    // for (let i of lst) {
    //     if (i.length >= 4) {
    //         newLst.push(`Hello ${i}`)
    //     }
    // }
    // return newLst;
    return  lst.filter(element =>
        element.length >= 4

    ).map(element => `Hello ${element}`)
}

function allLong(lst) {
    // lst is an array of strings
    // Returns true if every element of lst is of length at least 5. Otherwise returns false.
    // for (i of lst) {
    //     return i.length >= 5 ? true : false;
    // }
    return lst.every(function (element) {
        return element.length >= 5;
    })
}
module.exports = {
    removeEvens,
    keepLong,
    greet,
    greetLong,
    allLong
};