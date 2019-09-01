'use strict';
function whatsMyAgeAgain() {
    // returns this.age unless this is not defined. If this is not defined, return 18
    if (this === undefined) {
        return 18;
    } else {
        return this.age
    }
}

module.exports = whatsMyAgeAgain;