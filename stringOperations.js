// string declaration

const str = "Arun Prakash";

//string methods

//concat --> method to combine two strings
const str2 = "Aluri";
const concat = str.concat(str2);
console.log(concat);

//slice --> method to seperate a part of string
const slicedString = str.slice(2, 9);
console.log(slicedString);

//replace --> method to replace a particular portion of string
const str3 = "I am from Hyderabad";
const replacedString = str.replace("Prakash", "Aluri");
console.log(replacedString);
const replacedstr = str3.replace("Hyderabad", "Bangalore");
console.log(replacedstr);

//toUpperCase --> method used to capitalize all the letters in string
const uppercase = str.toUpperCase();
console.log(uppercase);

//toLowerCase --> method used to lowercase all the letters in string
const lowercase = str.toLowerCase();
console.log(lowercase);

//trim --> method used to remove any whitespaces from both sides of string
const line = "                    I am in hyderabad";
const res = line.trim();
console.log(res);
