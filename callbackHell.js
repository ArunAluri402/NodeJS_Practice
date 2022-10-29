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
const funcAdd = (a, b, callback) => {
  setTimeout(() => {
    const res = a + b;
    callback(res);
  }, 2000);
};

const secondFunc = (num, type, callback) => {
  if (type === "Even") {
    num = num * 2;
    callback(num);
  } else {
    num = num * 3;
    callback(num);
  }
};

funcAdd(10, 25, (result) => {
  console.log(`result = ${result}`);
  if (result % 2 === 0) {
    console.log("Even Number");
    secondFunc(result, "Even", (evenOrodd) => console.log(evenOrodd));
  } else {
    console.log("odd number");
    secondFunc(result, "Odd", (evenOrodd) => console.log(evenOrodd));
  }
});
