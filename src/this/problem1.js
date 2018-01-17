'use strict';
function whatsMyAgeAgain() {
    // returns this.age unless this is not defined. If this is not defined, return 18
    return this === undefined ? 18 : this.age;
}

module.exports = whatsMyAgeAgain;