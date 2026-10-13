class Car{
    static wheel = 4;

    constructor(name, model, price){
        this.name = name;
        this.model = model;
        this.price = price;
        this.wheel = 5;
    }

    static stop() {
        console.log("Car stop");
    }

    drive(){
        console.log(`${this.name} is driving`);
    }

};


const c1 = new Car("Honda","S11", 250000);
console.log(`${c1.name}, ${c1.model}, ${c1.price}, ${Car.wheel}`);
console.log(Car.wheel);
Car.stop();
console.log(c1.wheel);
// c1.stop(); // runtime error
c1.drive();
//Car.drive();
console.log(Car.wheel)


// static variable or function -> call it by using class name
// non static variable or function -> call it by object refernce variable 