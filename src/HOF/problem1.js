function callNoException(f, arg) {
    try {
        f(arg);
        return f(arg);
    }
    catch(err) {
        return null;
    }
}


function callNoNull(f, arg) {
        var ret = f(arg);
        if(ret === null) throw new Error("oh no!");
        return ret
}


function exceptionalize(f) { 
    return function(arg) {
        if (f(arg) == null) {throw 'arg is null';}
        else return f(arg);
    }
}



//
function nullify(f) {
    function g(arg) {
        try {
            return f(arg);
        } catch (err) {
            return null;
        }
    }
    return g;
}


//
function map(lst, f) {
    var ret = [];
    for (index in lst) {
      ret.push(f(lst[index]));
    }
    return ret;
  }


  //

  function filter(lst, f) {
    var arr = [];
    for(var i = 0; i < lst.length; i++) {
      if(f(lst[i]) == true) {
        arr.push(lst[i]);
      }
  }
  return arr;
}

  

function every(lst, f) {
 
    for(var i = 0; i < lst.length; i++) {
        if(f(lst[i]) === false) {
            return false;
        }
        
    }  
    return true;  
}


module.exports = {
    callNoException, 
    callNoNull,
    exceptionalize, 
    nullify,
    map, 
    filter, 
    every
};
