function first(arr) {
    // Throw an exception if the array has no elements
    // Otherwise return the first element
   if (1 > arr.length){ throw new Error("array has no elements");}
   else {return arr[0];
        }
   }
function detective(i) {
    function suspect(i) {  
        if(i * 7 % 3 == 0) throw new Error("Bad i!");
    }  
        try {
            suspect(i);
        }catch (err){
            return 'something fishy'
        }
       return "everything ok"
    }

  


    
    
    // detective checks to see if the suspect throws an exception on input i.
    // Returns "everything ok" if the suspect doesn't. 
    // Returns "something fishy" if the suspect does.


function assignFlight(name) {
    var flightNumber = ((name.length * 7) % 20) + "0";
    var terrorSuspects = ["bob", "eric", "susie"];
    if (terrorSuspects.includes(name)){
        throw new Error ("ALERT!")
    }else {return flightNumber}
    // if the name is a terror suspect, throw an exception
    // Otherwise, return the flight number
}

module.exports = {first, detective, assignFlight}