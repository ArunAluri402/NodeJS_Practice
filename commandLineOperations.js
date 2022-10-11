//concat of strings from command line

let str = process.argv[4];
let str2 = process.argv[5];
let op = str + " " + str2;
console.log(op);

//addition of two numbers from command line

let val1 = process.argv[2];
let val2 = process.argv[3];
let res = parseInt(val1) + parseInt(val2);
console.log(res);

// subtraction of two numbers from command line

let sub = parseInt(val2) - parseInt(val1);
console.log(sub);

// multiplication of two numbers from command line

let mul = parseInt(val1) * parseInt(val2);
console.log(mul);

// divison of two numbers from command line

let div = parseInt(val1) / parseInt(val2);
console.log(div);

//modulus of two numbers from command line

console.log(parseInt(val1) % parseInt(val2));
