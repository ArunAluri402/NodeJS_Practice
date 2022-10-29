//callback hell ---> callbacks inside the callback
const sample = (sample2) => {
  console.log("sample function");
  sample2();
};

const sample2 = () => {
  console.log("sample2 function");
};
sample(sample2);

/***********************/

const check = (a, b, add) => {
  if (a || b != null) {
    console.log(`A and B values are = ${a},${b}`);
  } else {
    console.log("Either A or B values are null");
  }

  add(2, 8);
};

const add = (a, b, res) => {
  res = a + b;
  console.log(res);
};
add(check);
