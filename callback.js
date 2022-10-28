//In JavaScript, you can also pass a function as an argument to a function. This function that is passed as an argument inside of another function is called a callback function

// function
function greet(name, callback) {
  console.log("Hi" + " " + name);
  callback();
}

// callback function
function callMe() {
  console.log("I am callback function");
}

// passing function as an argument
greet("Arun", callMe);

/******************************/

//using setTimeOut

const greets = (name, myFunction) => {
  console.log("Hello Everyone");

  // callback function
  // executed only after the greet() is executed
  myFunction(name);
};

// callback function
const sayName = (name) => {
  console.log("Hello" + " " + name);
};

// calling the function after 2 seconds
setTimeout(greets, 2000, "Arun Aluri", sayName);

/******************************/

const mainFunction = (callback) => {
  setTimeout(() => {
    callback([2, 3, 4]);
  }, 2000);
};

// Add function
const add = (array) => {
  let sum = 0;
  for (let i of array) {
    sum += i;
  }
  console.log(sum);
};

// Calling main function
mainFunction(add);

/******************************/

const second = () => {
  setTimeout(() => {
    console.log("Takes 2 Seconds");
  }, 2000);
};

const first = () => {
  console.log("First func called");
  second();
  console.log("the code still running");
};
first();
