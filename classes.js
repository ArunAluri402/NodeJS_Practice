//classes in JS

class Sample {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  sampleMethod() {
    return `value of a = ${this.a} and value of b = ${this.b}`;
  }
}
const obj = new Sample(44, 55);
console.log(obj.sampleMethod());

// class program to add
class Add {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  addMethod() {
    return `addition is : ${this.a + this.b}`;
  }
}

const addObj = new Add(22, 44);
console.log(addObj.addMethod());

// class program to display name and age
class Details {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  detailsMethod() {
    return `name = ${this.name} and age  = ${this.age}`;
  }
}
const detailObj = new Details("Arun", 25);
console.log(detailObj.detailsMethod());

//class program to print numbers using for loop
class Print {
  constructor(arr, l, res) {
    this.arr = arr;
    this.l = l;
    this.res = res;
    res = 0;
    l = arr.length;
    for (let i = 0; i < l; i++) {
      console.log(arr[i]);
    }
  }
}
const printObj = new Print([1, 5, 1, 6, 9, 7]);

// class program to concat
class Concat {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  concatMethod() {
    return `concat of ${this.a} and ${this.b} is ${this.a + this.b}`;
  }
}

const concatObj = new Concat("Arun", "Prakash");
console.log(concatObj.concatMethod());

// class program to print names in array

class Prop {
  constructor(persons, len) {
    this.persons = persons;
    this.len = len;
    len = persons.length;

    for (let i = 0; i < len; i++) {
      console.log(persons[i]);
    }
  }
}
const propObj = new Prop(["Arun", "Prakash", "Aluri"]);
