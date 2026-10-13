let user = {
    name: "tome",
    age: 30,
    salary: 45.44,
    isActive: true,

    address: {          // child object
        flat: 101,
        building: "New bhavan",
        city: "Pune",
        zip: 1414
    }
};

//console.log(user);

// shallow copy

// let myUser = {...user};     
// console.log(myUser);

// console.log("----------------------------------")

// user.age = 40;
// console.log(user);
// console.log(myUser);

// deep copy

// let newUser = structuredClone(user);
// console.log(newUser)


console.log("----------------------------------")

let customer = {        // parent object
    name: "Manish",
    age: 38,
    phone: "9129273947",
    salary: 23.33,
    isActive: true,

    address: {          // child object
        flat: 101,
        building: "New bhavan",
        city: "Pune",
        zip: 1414
    }
};

console.log("----------------------------------")
console.log("Shallow cloning");

console.log(customer);
let newCust = {...customer};
console.log(newCust);

console.log("----------------------------------")


newCust.address.city= "Satara";
console.log(newCust);
console.log(customer);

console.log("Deep cloning");
console.log("----------------------------------")


let newCustomers = structuredClone(customer);
console.log(customer);
console.log(newCustomers);

console.log("----------------------------------")

customer.address.city="Banglore";
console.log(customer);
console.log(newCustomers);

// Shallow copay Vs Deep copy
// 1. With respect to nested object shallow copy dosent work, let say if we have address as nested
// object and i updated one of the property from address after cloning then the same property will 
// update for main object as well
// this is not a bug that is feture , it works for level 1 but it if u update nested property then it will update other object also
