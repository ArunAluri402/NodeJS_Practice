//functions -- 20 programs 

//function to multiply
function abc(a, b) {
  return a * b;
}
console.log(`multiplication = ${abc(20, 50)}`);

//function to add
function add(x, y, z) {
  return x + y + z;
}
console.log(`addition = ${add(20, 50, 60)}`);

//function to divide
function div(x, y) {
  return x / y;
}
console.log(`division = ${div(20, 50)}`);

//for loop in function
function forLoop() {
  for (i = 0; i < 10; i++) {
    console.log(i);
  }
}
forLoop();

//if loop in function
function ifLoop() {
  const a = 500;
  if (a == a + 1) {
    console.log("inside the loop");
  } else {
    console.log("outside the loop");
  }
}
ifLoop();

//incerement using function

let count = 0;
function incerement() {
  for (let i = 0; i < 20; i++) {
    count++;
  }
  console.log(count);
}
incerement();

//sum of array using functions

function sumArray(arr) {
  for (var i = 0, l = arr.length, sum = 0; i < l; sum += arr[i++]) {}
  return sum;
}
console.log(`Sum of Array is = ${sumArray([1, 2, 3, 4])}`);
console.log(`Sum of Array is = ${sumArray([1, 8, 3, 4, 6, 8, 7, 1, 8, 9, 7])}`);
console.log(
  `Sum of Array is = ${sumArray([1, 8, 5, 6, 9, 6, 9, 6, 2, 3, 4, 3])}`
);

//max  in array using function

function maxElement(arr) {
  let max = 0;
  var len = arr.length;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}
console.log(maxElement([1, 5, 8, 9, 44, 56, 101]));

//filter of odd numbers from an array
const filterNum = (arr) => {
  const result = arr.filter((num) => num % 2 === 1);
  return result;
};
console.log(filterNum([1, 5, 3, 4, 6, 8, 10, 12, 13]));
