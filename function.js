// 1. function declaration

function add(a,b){
    return a+b;
}

function print(){
    console.log("Hi i am JS")
}
const sum = add(5,6);
console.log(sum);
print();

// 2. function expression -> annonymous function

const multiply = function (x,y){
    return x*y;
}

const mul = multiply(3,2);
console.log(mul);

// 3. arrow function expression >  "=>"
const division = (a,b) => a/b;
let div = division(20,2);
console.log(div);

// 4. function construtor 
const substract = new Function('a','b','return a-b;');
let sub = substract(50,30);
console.log(sub);

// 5. IIFE (Immediatly Invoked Function Expression) -> important mesg - server is up, etc.
(function(){
    console.log("Self invoke function......");
})();

//6. Generator function -> return sequence of value
// function* and yield keyword

function* generateNumber(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const gen = generateNumber();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


// 7. Annonymous function
// no specific name , identifire. Use it for callback function
// let number = [1,2,3,4,5];
// let annMap = number.map(function(e) {
//     return e*e;
// });

let number = [1,2,3,4,5];
let annMap = number.map((e) => {
    return e*e;
});

console.log(annMap);

// 8. Recursive function
function factorial(n){
    if(n ==0 || n ==1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
};

console.log(factorial(4));


// 9. higher oreder function
function addition(a,b){
    return a+b;
}

function operator(funcName,a,b){
    return funcName(a,b);
}

let s = operator(addition, 4, 5);
console.log(s)