class Car{
                        // construntor cannot be overload
    constructor(name, price, model, color){
        this.name=name;
        this.price=price;
        this.model=model;
        this.color=color;
    }

   

    refule() {
        console.log(this.name +" Car is refuled");
    }
};

// carDetails -> object red veriable
// new -> to create new object

const carDetails = new Car("Scoda",122223,"S31","Blue");
const carDetails1 = new Car("BMW",50000,"B31","Red");

console.log(carDetails);
console.log(carDetails.color);
console.log(carDetails.name);
carDetails.refule();

console.log("-----------------------------")

console.log(carDetails1);
console.log(carDetails1.color);
console.log(carDetails1.name);
carDetails1.refule();

