// Make parent the __proto__ of child

var parent = {x: 5, y: 6, z: 8};
var child = {x : 10};

child.__proto__ = parent;

module.exports = {parent, child}