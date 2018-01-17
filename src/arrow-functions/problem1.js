// arrow function rules. either () => { ... } or () => ... or OnlyOnPara => {...}. The bit to the left of the arrow is the parameters and if there's only one we don't 
// need braces, otherwise we do. to the right of the arror we don't need curly braces if it's just a expression (evals to a value) but do need the curlies if it's 
// a statement (multi lines to evaluate)


// fix all the errors.
// function c(g, h) {
//     var x = g(6);
//     var y = h(8, 10);
//     return [x, y];
// }

// function t() {
//     return c( x => return y + 2, (x,y) => return x + y);
// }

// module.exports = t


function c(g, h) {
        var x = g(6);
        var y = h(8, 10);
        return [x, y];
    }
    
    function t() {
        return c( x => {return x + 2}, (x,y) => {return x + y});
    }
    
    module.exports = t