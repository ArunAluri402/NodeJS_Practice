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

//array multiplication
const multiple = (arr) => {
  let res = 1;
  for (let i = 0; (len = arr.length), i < len; i++) {
    res = res * arr[i];
  }
  return res;
};

console.log(multiple([1, 5, 6, 3]));

//array division
const div = (arr) => {
  let res = 1;

  for (let i in arr) {
    res = res / arr[i];
  }
  return res.toFixed(2);
};

console.log(div([1, 5, 6]));
