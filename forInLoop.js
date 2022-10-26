// for printing numbers

const print = (arr) => {
  for (let i in arr) {
    console.log(arr[i]);
  }
};
print([1, 2, 3, 4, 5, 6, 8, 8, 7]);

//for addition of numbers in array

const add = (arr) => {
  let res = 0;
  for (let i in arr) {
    res += arr[i];
  }
  return res;
};
console.log(add([1, 10, 15, 44, 55]));
