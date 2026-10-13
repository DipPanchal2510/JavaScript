class Automobile{
    constructor(chassisNumber){
        this.chassisNumber = chassisNumber;
    } 

    userAeroDynamic(){
        console.log("Automobile");
    }


    getInfo() {
        return `${this.make}, ${this.year}`
    }

    startEngine(){
        console.log("Engine started "+this.make  )
    };

    stopEngine(){
        console.log("Engine stoped")
    };
}


// Parent class (cuper class)

class Vehicle extends Automobile{
    constructor(make, model, year){
        super(10000338);
        this.make= make;
        this.model= model;
        this.year= year;
    }

    getInfo() {
        return `${this.make}, ${this.model}, ${this.year}`
    }

    startEngine(){
        console.log("Engine started")
    };

    stopEngine(){
        console.log("Engine stoped")
    };
}

// child class (sub class)

class Car extends Vehicle{
    constructor(make, model, year, fule){
        super(make, model, year);       // call parent constructor
        this.fule= fule;
    }

    driveCar(){
        console.log("Driving the car "+this.model);
    }
}

class Truck extends Vehicle{
    constructor(make, model, year, loadingCap){
        super(make, model, year);       // call parent constructor
        this.loadingCap= loadingCap;
    }

    driveTruck(){
        console.log("Driving the Truck "+this.model +" : "+this.loadingCap);
    }
}


const car1 = new Car("Honda","H22",2025, "Petrol");
const truck1 = new Truck("Adani","A33",2024, 100);

car1.driveCar();
car1.startEngine();
console.log(car1.getInfo());
car1.userAeroDynamic();
console.log(car1.chassisNumber);

truck1.driveTruck();
truck1.startEngine();
truck1.stopEngine();
console.log(truck1.getInfo());
truck1.userAeroDynamic();
