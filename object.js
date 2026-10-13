// object -> collection of related data which has key-value pair
// keys are always string
// memoru allocate at the runtime

// Garbage collector
// GC -> comes into the picture when V8 engine give instruction that heap momory is occupied , GC will automatically remove the 
// null or undifined object. For which object has value that needs to be derefer and then GC will 
// remove from the memory. GC only works for Head memory.
// If GC is occupied with actual reference and their value then GC capcity(Ram size) should get increased

// if object has null refernce and it aligible for GC and memory is still available then GC will not come
// and remove object from heap. GC will come into picture when heap memory is fully ocupied



let user = {        // user is reference variable and store in stack memory
    name: "Dipesh",
    age: 30,
    city: "Mumbai",
    zip: 1212
};

console.log(user.name);
console.log(user.age);  // . notation
console.log(user['city'])   // bracket notation and property always be in single quotes

//user = null;          // null.name -> always get erro

//user = undefined;       // undefined.name -> always get erro

console.log(user);
user.city="Pune"
console.log(user);
user.zip=131313;
console.log(user);
user.phone = 9292929292;
console.log(user);
delete user.age;
console.log(user);


console.log("-----------------------------");

// Nested object 
// To represent information in one property like Address details bind with address property

// JS object

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

console.log(customer.name);
console.log(customer.address);
console.log(customer.isActive);
console.log(customer.address.flat);
console.log(customer['address']['building']);
console.log(customer['address'].city);

console.log("---------------------------");
// JS object

let users = {        // user is reference variable and store in stack memory
    name: "Dipesh",
    age: 30,
    city: "Mumbai",
    zip: 1212
};
console.log(users);
console.log(typeof users);
console.log("---------------------------");
// JS objcet to JSON:   -> JSON - JavaScript Object Notation

// Marshelling                                                
let userJson = JSON.stringify(users);         //  Serialization -> stringigy -> convert JS object to JSON 
console.log(userJson);                        // Key is always double quote
console.log(typeof userJson);

console.log("---------------------------");
// JSON string to JS Object                   // de-serialization -> De-Marshelling
let userObject = JSON.parse(userJson);
console.log(userObject); 
console.log(typeof userObject); 

console.log(users.name === userObject.name);
console.log(users === userObject);              // false -> it compares memory address


let emp = {        
    name: "Dipesh",
    age: 30,
    city: "Mumbai",
    zip: 1212,
    devices: ['airtel','vodafone','idea']
};

console.log(emp);
console.log(emp.devices[2]);
let empJson = JSON.stringify(emp);
console.log(empJson);

