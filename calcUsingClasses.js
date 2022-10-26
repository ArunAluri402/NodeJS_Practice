class Calc {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  addMethod() {
    return `Addition of ${this.a} and ${this.b} is : ${this.a + this.b}`;
  }

  subMethod() {
    return `Sunbtraction of ${this.a} and ${this.b} is : ${this.a - this.b}`;
  }

  divMethod() {
    return `Division of ${this.a} and ${this.b} is : ${(
      this.a / this.b
    ).toFixed(2)}`;
  }

  mulMethod() {
    return `Muliplication of ${this.a} and ${this.b} is : ${this.a * this.b} `;
  }

  modMethod() {
    return `Modulus of ${this.a} and ${this.b} is : ${this.a % this.b} `;
  }
}

//object for addition
const addobj = new Calc(22, 44);
console.log(addobj.addMethod());

//object for subtraction
const subobj = new Calc(55, 44);
console.log(subobj.subMethod());

//object for divison
const divobj = new Calc(20, 19);
console.log(divobj.divMethod());

//object for Multiplication
const multipleobj = new Calc(55, 77);
console.log(multipleobj.mulMethod());

//object for modulus
const modobj = new Calc(77, 34);
console.log(modobj.modMethod());
