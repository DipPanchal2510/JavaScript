// IIFE : Immediatly Invoke Function Expression
// anonymous function : no name of the function
// This function is invoked (called) by itself

(() => {
    console.log("Hello world");
})();

(function (userName) {
    console.log(userName);
})('Naman');

(function (name, age, salary) {
    console.log(name, age, salary);
})("Dipesh",30,12.22);


let flag = ((browserName) => {
    console.log("Hellow world", browserName);
    return true
})("chrome");

console.log(flag);