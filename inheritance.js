//inheritance with constructor
//parent class
class Bike {
  constructor(brand) {
    this.bike = brand;
  }
  present() {
    return ` have a  ${this.bike}`;
  }
}
//child class
class Model extends Bike {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  showBrand() {
    return `${this.present()} it is a   ${this.model}`;
  }
}
let myCar = new Model("Ford", "Mustang");
console.log(myCar.showBrand());

//parent class
class School {
  constructor(batch) {
    this.batch = batch;
  }
  presentBatch() {
    return ` Iam ${this.batch} th batch of the school`;
  }
}
//child class
class Batch extends School {
  constructor(batch, year) {
    super(batch);
    this.year = year;
  }
  showBatchYear() {
    return `${this.presentBatch()}is studied in the year ${this.year}`;
  }
}
let mybatch = new Batch(14, 2015);
console.log(mybatch.showBatchYear());

//parent class
class Laptop {
  constructor(brand) {
    this.brand = brand;
  }
  LapBrand() {
    return ` My laptop is of Brand = ${this.brand}`;
  }
}
//child class
class ModelName extends Laptop {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  showModel() {
    return `${this.LapBrand()} has many models, my model is =  ${this.model}`;
  }
}
let myModel = new ModelName("Lenovo", "320-E");
console.log(myModel.showModel());

//parent class
class Institute {
  constructor(batch) {
    this.batch = batch;
  }
  presentBatch() {
    return ` Iam ${this.batch} rd batch of the Institute`;
  }
}
//child class
class BatchNumber extends Institute {
  constructor(batch, year) {
    super(batch);
    this.year = year;
  }
  showBatchNumber() {
    return `${this.presentBatch()}is studied in the year ${this.year}`;
  }
}
let mybatchNumber = new BatchNumber(3, 2022);
console.log(mybatchNumber.showBatchNumber());

//parent class
class Animal {
  constructor(category) {
    this.category = category;
  }
  categoryMethod() {
    return ` Tiger comes under the category of ${this.category}`;
  }
}
//child class
class Type extends Animal {
  constructor(category, type) {
    super(category);
    this.type = type;
  }
  typeMethod() {
    return `${this.categoryMethod()}which is a ${this.type} of forest`;
  }
}
let typeAnimal = new Type("Wild Animal", "King");
console.log(typeAnimal.typeMethod());

