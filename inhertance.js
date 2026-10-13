//Inhertance
// child class is able to access the parent class proerties
// parent class cannot access anything from child

class car{
    speed = 30;

    start(){
        console.log("Car --- start");
        console.log(this.speed);
    }
    stop(){
        console.log("Car --- stop");
    }
    refule(){
        console.log("Car --- refule");
    }
    #billing(){
        console.log("Car --- billing");
    }
}

class BMW extends car{
    //speed = 300;

    // method overriding
    start(){
        console.log("BMW --- start");
    }
    parking(){
        console.log("BMW --- parking");
    }
    #billing(){
        console.log("BMW --- billing");
    }
    getBilling(){
        this.#billing()
    }
    dashboard(){
        this.start();
        super.start(); // super keyword is used for parent class methods
    
    }
}

let bmw = new BMW();
console.log(bmw.speed);
bmw.start();// overriden
bmw.stop();// inherited
bmw.refule();// inherited
bmw.parking(); // individual
bmw.getBilling();


let c1 = new car();
console.log(c1.speed);
c1.start();
c1.stop();
c1.refule();

let b1 = new BMW();
b1.dashboard();


class car{
    myspeed = 100;

    start(){
        console.log("Car --- start");
        console.log(this.speed);
    }
}

class BMW extends car{
    speed = 300;

    start(){
        console.log("BMW --- start");
    }
    dashboard(){
        this.start();
        super.start()
        console.log(this.speed);
        console.log(super.myspeed);
    }

}

let b1 = new BMW();
b1.dashboard();