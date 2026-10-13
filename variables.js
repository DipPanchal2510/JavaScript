// 1. var
// after ES6
// scope var : functionally/locally and gloabal

var x = 10;
function test(){
    var x = 20;
};

console.log(x);

var pop = "Hi js";
function rel(){
    var top = "Hello Js";
    console.log(top);
}
rel();
//console.log(top);
console.log(pop);


// var => Re-declaration is allowed
var browser = "chrome";
var browser = "safari";  //declaring browser variable and initialize
browser = "Firefox";    // re-initialization
console.log(browser);

var g;
console.log(g); // default undefined
g = "Hello World!!!";
console.log(g);

// Problem/issue with var
var flag = "Hey, Dipesh";
var t1 = 4;

if(t1 > 3){
    flag = "Hey, naveen";
}
console.log(flag);

// let 
// scope : blocks -> started and ended with {} eg. swich, for-loop

let m = "Hellow !!"
let n = 4;

if(n > 3){
    let msg = "I am good now";
    console.log(msg);
}
console.log(m);

// let -> Re-declaration is not allowed but can be re-initialize
let len = 4;
len = 5;
console.log(len)

// const -> fixed value -> days in week, months, 
// Re-assining is not allowed 

const h = "Neal";
console.log(h);

const days = 7;
//days = 10;
console.log(100 * days);

//

var o;
console.log(o); // default undefined

let xx;