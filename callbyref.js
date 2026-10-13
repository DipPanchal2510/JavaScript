

function test(name){
    console.log(name);
}

// call by value
//test("Tom");
//test(100);


// call by ref

let user = {
    name: "tome",
    age: 30,
    salary: 45.44,
    isActive: true,
};

function getUserDetails(userObj){
    console.log(userObj.name, userObj.age);
    console.log(userObj);
    userObj.name = 'Dipesh';
};

console.log(user.name);
getUserDetails(user);   // call function by passing object refernce
console.log(user.name);

console.log("-----------------------------------------------");

// what is object destructuring
// object destructuring concept:
// it means getting partial values from whole object like below only name and age property taken from object
// getting specific value
// Supply the whole object and fetch the required values out of it
// use case : There is product details and required is product name, description then we can use destructing

// 4 key - value pair
let person = {
    name: "satish",
    age: 31,
    salary: 45.44,
    isActive: true,   
};

function getPersonData ({name, age, salary}){
    console.log(name, age, salary);
};

getPersonData(person);


console.log("-----------------------------------------------");

// 1 way

function getDat({name}){
    console.log(name);
};

getDat(person);

console.log("-----------------------------------------------");

// 2 way

let {name, age} = person;
console.log(name, age);

let { name:userName, age:userAge} = person;
console.log(userName, userAge);