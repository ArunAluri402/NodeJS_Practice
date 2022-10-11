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
console.log(typeof(sum));//number

let sum2 = num2 + c; // number + undefined
console.log(sum2); //NaN
console.log(typeof(sum2)); //number

let sum3 = num2 + val; //number + null
console.log(sum3);
console.log(typeof(sum3)); //number

let sum4 = num2 + x; //number + boolean
console.log(sum4);
console.log(typeof(sum4)); //number (true =1 , false =0)

//undefined

let value = c + d; //undefined + undefined
console.log(value); // NaN
console.log(typeof(value)); //number

let value2 = c+str; // undefined + string
console.log(value2);
console.log(typeof(value2)); //string

let value3 = c + num; //undefined + number
console.log(value3); //NaN
console.log(typeof(value3)); //number

let value4 = d+val; //undefined + null
console.log(value4); //NaN
console.log(typeof(value4)); //number

let value5 = d + x; //undefined + boolean
console.log(value5);
console.log(typeof(value5)); //number


// null operations

let res = val + num; // null + number
console.log(res);
console.log(typeof(res)); //number

let res2 = val + val; // null + null
console.log(res2); // 0
console.log(typeof(res2)); //number

let res3 = val + c; //null + undefined
console.log(res3);
console.log(typeof(res3)); //number

let res4 = val + x; // null + boolean
console.log(res4);
console.log(typeof(res4)); //number

//boolean operations

let op = x + str; // boolean + string
console.log(op);
console.log(typeof(op)); //string

let op2 = x + y;
console.log(op2);
console.log(typeof(op2)); //number

let op3 = x - y;
console.log(op3);
console.log(typeof(op3)); //number

let op4 = x + x;
console.log(op4);
console.log(typeof(op4)); //number

let op5 = y+y;
console.log(op5);
console.log(typeof(op5)); //number

let op6 = x + c; // boolean + undefined
console.log(op6);
console.log(typeof(op6)); //number

let op7 = x + val // boolean + null
console.log(op7);
console.log(typeof(op7)); //number
