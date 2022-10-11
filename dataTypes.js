// data types in javaScript

// string -- > character or set of characters
// can declare in 3 ways

const str = 'Arun'; //single quoted
const str2 = "Prakash"; // double quoted
const str3 = `Aluri`; //backticks
console.log(str, str2, str3);
console.log(typeof str, typeof str2, typeof str3); // strings

//Number
const num = 12; //number
const num2 = 10.08; //float
console.log(num, num2);
console.log(typeof num, typeof num2);

//undefined --> for variables which value isn't assigned.
let c;
let d;
console.log(c, d);
console.log(typeof c, typeof d);

//null --> empty set or object
const val = null;
console.log(val);
console.log(typeof val);

//boolean --> true or false
let x = true;
let y = false;
console.log(x,y);
console.log(typeof(x),typeof(y));



//operations on datatypes

//string concatination
let concat = str + ' '+str2 +" "+str3;
console.log(concat);
console.log(typeof(concat)); //string

let concat2 = str + num + num2;
console.log(concat2);
console.log(typeof(concat2)); //string

let concat3 = num + str;
console.log(concat3);
console.log(typeof(concat3)); //string

let concat4= str2 + c;
console.log(concat4);
console.log(typeof(concat4)); // string

let concat5 = c+str2;
console.log(concat5);
console.log(typeof(concat5)); // string

let concat6 = str +val; //string + null
let concat7 = val+str2; //null + string
console.log(concat6);
console.log(typeof(concat6)); //string
console.log(concat7);
console.log(typeof concat7); //string

let concat8 = str +x; //string + boolean
console.log(concat8);
console.log(typeof concat8); //string

//number operations

let sum = num +num2; //number + number
console.log(sum);
console.log(typeof(sum));
