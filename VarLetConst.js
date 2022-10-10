//var

var a = 10;
a = 12;
console.log(a); // Reassign allowed.

//let

let b = 10;
b = 12;
console.log(b); // hoisting not allowed. | Reassign allowed.

//const

const c = 15;

c = 25;

console.log(c); // error, const value can't be changed.
