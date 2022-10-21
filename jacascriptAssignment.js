
//front end react weather calc.. farenheit to celcius more than 70 red green less 70 without button press
// formula = (F-32)*5/9 =C
//current weather by placing city

//sum of array using functions

const sumArray = (arr) => {
  for (var i = 0, l = arr.length, sum = 0; i < l; sum += arr[i++]) {}
  return sum;
};
console.log(`Sum of Array is = ${sumArray([1, 2, 3, 4])}`);
console.log(`Sum of Array is = ${sumArray([1, 8, 3, 4, 6, 8, 7, 1, 8, 9, 7])}`);
console.log(
  `Sum of Array is = ${sumArray([1, 8, 5, 6, 9, 6, 9, 6, 2, 3, 4, 3])}`
);

//max  in array using function

const maxElement = (arr) => {
  let max = 0;
  var len = arr.length;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
};
console.log(maxElement([1, 5, 8, 9, 44, 56, 101]));

//filter of odd numbers from an array
const filterNum = (arr) => {
  const result = arr.filter((num) => num % 2 === 1);
  return result;
};
console.log(filterNum([1, 5, 3, 4, 6, 8, 10, 12, 13]));
