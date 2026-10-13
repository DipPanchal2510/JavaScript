// 1. with function name
function testing(callback){
    console.log("Hello");
    callback();
};

function print(){
    console.log("Hello World!!!");
};

testing(print);

// 2. with function expression

let doTest=function doTesting(){
    console.log("Doing testing");
};

testing(doTest);

// 3. with anonymous

testing(function (){
    console.log("I am running");
});

// 4. with arrow

testing( () =>{
    console.log("With arrow function");
});

// internal function for calculator
// user facing function

let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;

// user want to use this calculator:


function calculator(callback, a, b){
    console.log("Doing calculation");
    return callback(a, b);        // callback = add = (a, b) => a + b;
}                                 // 300 + 400 = 700


let t1 = calculator(add, 300, 400);
console.log(t1);

let r1 =calculator(add, 10,20);
console.log(r1);

r1 = calculator(sub, 100, 80);
console.log(r1);

r1 = calculator(mul, 100, 80);
console.log(r1);

r1 = calculator(div, 100, 80);
console.log(r1);


function finding(callback1, callback2){
    console.log("Finding element");
    callback1();
    callback2();
}

function coding(){
    console.log("Hello coding");
}

function writing(){
    console.log("Hello writing");
}

finding(coding, writing);


function click(element1, element2){
    console.log("Click on", element1,element2);
}

function performAction(actionCallback, element1, element2){
    console.log("Do this action...");
    actionCallback(element1, element2);
}

performAction(click, "Login", "Signin");


function getUserDetails(callback, userObj){
    console.log("Getting user details....");
    callback(userObj);
}

getUserDetails((user) => {
    console.log(user);
}, {name: "dip", age: 30, salary: 12.33});


function prints(){
    console.log("Printing....");
}

let userDetails={
    name: "Dip",
    age: 30,
    salary: 12.33,

    show (callback){
        console.log("Address is LA");
        callback();
    }


};

userDetails.show(prints);


setTimeout(()=>{
    console.log("Hello world!!!");
}, 4000);

function getData(callback){
    console.log("Getting data from database");
    setTimeout(()=>{
        // get the data from API
        callback();
    }, 4000)
};

getData(()=>{
    console.log("User data");
});