//callback hell ---> callbacks inside the callback
const sample = (sample2) => {
  console.log("sample function");
  sample2();
};

const sample2 = () => {
  console.log("sample2 function");
};
sample(sample2);
console.log("/************************************/");

/**********************************************/
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
    secondFunc(result, "Even", (evenOrodd) =>
      console.log("Final result is :", evenOrodd)
    );
  } else {
    console.log("odd number");
    secondFunc(result, "Odd", (evenOrodd) =>
      console.log("Final result is :", evenOrodd)
    );
  }
});
setTimeout(() => {
  console.log("/************************************/");
}, 2000);
/**********************************************/

//program to find multiplication of number and result is prime or not, if prime square of number or else cube of number and to print result

const mul = (x, y, callbackFunc) => {
  setTimeout(() => {
    const res = x * y;
    callbackFunc(res);
  }, 5000);
};

const Prime = (res, flag = false, callbackFunc) => {
  if (res == 2) {
    flag = true;
  }
  for (let i = 2; i <= Math.sqrt(res); i++) {
    if (res % i == 0) {
      flag = false;
      break;
    }

    if (flag == true) {
      console.log(`${res} is a Prime Number`);
      res = res * res;
      console.log("square of result is", res);
    } else {
      console.log(`${res} is not a prime Number`);
      res = res * res * res;
      console.log("Cube of result is ", res);
    }
  }
};

mul(1, 9, (mul) => {
  console.log("Multiplication of X and Y is : ", mul);
  Prime(mul, (val) => {
    console.log(val);
  });
});
