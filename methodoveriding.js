class Car{

    minSpeed = 100;

    constructor(make, model){
        this.make = make;
        this.model = model;
    }

    startEngine(){
        console.log("Staring engin----for Car")
    }
};

class Audi extends Car{
    minSpeed = 80;
    // overriden method 
    startEngine(){
        console.log("Staring engin----for Audi")
    }

    autoParking(){
        console.log("Audi auto-parking")
    }
};

const a1 = new Audi();
a1.startEngine();
a1.autoParking();
console.log(a1.minSpeed);

const c1= new Car();
c1.startEngine();
//c1.autoParking();