'use strict';
function whatsMyAgeAgain() {
    try {
        return this.age;
    }
    catch(e) {
        return 18;
    }
    // returns this.age unless this is not defined. If this is not defined, return 18
}

module.exports = whatsMyAgeAgain;