class Example {
  a = "Arun";
  b = "Aluri";

  concatMethod() {
    return `${this.a + this.b}`;
  }
}
const obj = new Example();
console.log(obj.concatMethod());

class Sample {
  a = 44;
  b = 55;

  sampleMethod() {
    return `value of a = ${this.a} and value of b = ${this.b}`;
  }
}
const obj2 = new Sample();
console.log(obj2.sampleMethod());

// class program to add
class Add {
  a = 22;
  b = 44;

  addMethod() {
    return `addition is : ${this.a + this.b}`;
  }
}

const addObj = new Add();
console.log(addObj.addMethod());

// class program to display name and age
class Details {
  name = "Arun";
  age = 25;

  detailsMethod() {
    return `name = ${this.name} and age  = ${this.age}`;
  }
}
const detailObj = new Details();
console.log(detailObj.detailsMethod());

//class program to print numbers using for loop
class Print {
  arr = [1, 5, 7, 8, 54, 88, 9];
  res = 0;

  addMethodArray() {
    for (const key in this.arr) {
      const val = this.arr[key];
      return val;
    }
  }
}
const addarrayObj = new Print();
console.log(addarrayObj.addMethodArray());

// class program to concat
class Concat {
  a = "Arun";
  b = "Prakash";

  concatMethod() {
    return `concat of ${this.a} and ${this.b} is ${this.a + this.b}`;
  }
}

const concatObj = new Concat();
console.log(concatObj.concatMethod());

// class program to find length of array

class Prop {
  persons = ["Arun", "Prakash", "Aluri"];
  len = persons.length;

  arrayLen() {
    return `length of the array is = ${this.len}`;
  }
}
const propObj = new Prop();
console.log(propObj.arrayLen());
