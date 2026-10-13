// 1. Object literals

const user = {
    name: 'Dipesh',
    age: 30,
    gender: 'Male',
    country: 'India',
}

console.log(user);
console.log(user.name);
console.log(user.country);

console.log("-----------------------")

// 2. constructor function

function Car(brand, model, color){
    this.brand= brand;
    this.model= model;
    this.color= color;
};

const c1 = new Car("Scoda","S12","Blue");
const c2 = new Car("BMW","B1122","Red");
console.log(c1.brand);
console.log(c1.model);

console.log("-----------------------")

console.log(c2.brand);
console.log(c2.model);

// 3. Class style
console.log("-----------------------")

class Customer {
    constructor(name, product){
        this.name = name;
        this.product = product;
    }

    addToCart() {
        console.log(`${this.product} is added into cart`)
    }
};

// Instance of the class

const cust1 = new Customer("Naveen","iMac");
console.log(cust1.name);
console.log(cust1.product);
cust1.addToCart();

console.log("-----------------------")
// 4. Object.create(): with some prototype object.
const employeePrototype = {
    printInfo :function(){
        console.log(`Hello, to emp ${this.name}`)
    }
};

const e1= Object.create(employeePrototype);
e1.name = "Satish";
e1.printInfo();

console.log("-----------------------")
// 5. using Factory Function: return an object

function createDepartment(depName, headDep ){
    return {
        depName: depName,
        headDep: headDep,
        printInfo :function(){
            console.log(`Department is ${this.depName} and hod is ${this.headDep}`)
        }
    }
}

const d1 = createDepartment("IT","Akshay Thube");
const d2 = createDepartment("Admin","Pooja Pai");

console.log(d1.depName);
console.log(d1.headDep);
d1.printInfo();
console.log("-----------------------")

console.log(d2.depName);
console.log(d2.headDep);
d2.printInfo();





