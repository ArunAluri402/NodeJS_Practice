//inheritance with constructor
//parent class
class Bike {
  bike = "BMW";
  present() {
    return ` I have a Bike =  ${this.bike}`;
  }
}
//child class
class Model extends Bike {
  model = "M30W";
  showBrand() {
    return `${this.present()} With the model =  ${this.model}`;
  }
}
let myCar = new Model();
console.log(myCar.showBrand());

//parent class
class School {
  batch = "14";
  presentBatch() {
    return ` Iam ${this.batch} th batch of the school`;
  }
}
//child class
class Batch extends School {
  year = 2015;
  showBatchYear() {
    return `${this.presentBatch()}is studied in the year ${this.year}`;
  }
}
let mybatch = new Batch();
console.log(mybatch.showBatchYear());

//parent class
class Laptop {
  brand = "Dell";
  LapBrand() {
    return ` My laptop is of Brand = ${this.brand}`;
  }
}
//child class
class ModelName extends Laptop {
  model = "Xps-30";
  showModel() {
    return `${this.LapBrand()} has many models, my model is =  ${this.model}`;
  }
}
let myModel = new ModelName();
console.log(myModel.showModel());

//parent class
class Institute {
  batch = 3;
  presentBatch() {
    return ` Iam ${this.batch} rd batch of the Institute`;
  }
}
//child class
class BatchNumber extends Institute {
  year = 2022;
  showBatchNumber() {
    return `${this.presentBatch()}is studied in the year ${this.year}`;
  }
}
let mybatchNumber = new BatchNumber();
console.log(mybatchNumber.showBatchNumber());

//parent class
class Animal {
  category = "Wild Animals";
  categoryMethod() {
    return ` Tiger comes under the category of ${this.category}`;
  }
}
//child class
class Type extends Animal {
  type = "King";
  typeMethod() {
    return `${this.categoryMethod()}which is a ${this.type} of forest`;
  }
}
let typeAnimal = new Type("Wild Animal", "King");
console.log(typeAnimal.typeMethod());
