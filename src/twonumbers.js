function addTwoNumbers(a, b) {
    if(typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return undefined;
}
module.exports = {addTwoNumbers }