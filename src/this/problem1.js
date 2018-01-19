'use strict';
function whatsMyAgeAgain() {
    if (this === undefined){
        return 18;
    }else{
        return this.age;
    }

    // returns this.age unless this is not defined. 
    // If this is not defined, 
    // return 18
}




module.exports = whatsMyAgeAgain;