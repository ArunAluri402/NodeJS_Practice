// JS is async
//executes the code without wating

//setTimeOut is used to execute a peice of code after the given time

//logging with set timeout
console.log(1);
console.log(2);
console.log(3);
console.log(4);
setTimeout(() => {
  console.log(5);
}, 2000);
console.log(6);
setTimeout(() => {
  console.log(7);
}, 5000);

//functions in set timeout
const func = () => {
  let val = setTimeout(() => {
    console.log("Iam Arun Prakash");
  }, 7000);
  return val;
};
func();

// program to display a text using setTimeout method
function greet() {
  console.log("Hello all");
}

setTimeout(greet, 3000);
console.log("This message is shown first");

// program to display time every 3 seconds
function showTime() {
  // return new date and time
  let dateTime = new Date();

  // returns the current local time
  let time = dateTime.toLocaleTimeString();

  // display the time after 3 seconds
  setTimeout(() => {
    console.log(time);
  }, 3000);
}
showTime();

//using two functions and Math method

const greet=(greeting)=> {
  console.log(greeting);
}

const getRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
let greetings = ["Hello", "Namaste", "Hai"],
  randomGreeting = getRandom(greetings);
setTimeout(() => {
  greet(randomGreeting);
}, 1000);
