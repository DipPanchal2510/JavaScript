/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns addition of two numbers
 */

function addition( x, y){
    return x + y;
}

// let m1 = addition(10, 20);
// console.log(m1);

// let m2 = addition("Naveen ", "Automation");
// console.log(m2);

// let m3 = addition("Naveen ", 10);
// console.log(m3);

// let m4 = addition(30, 40);
// console.log(m4);

let m5 = addition("Hello ", "Tom");
console.log(m5);

/**
 * 
 * @param {string} browserName 
 * @returns true for valid browser and false for invalid browser
 */

function launchBrowser(browserName){
    console.log("Launching browser : " + browserName);

    switch(browserName.trim().toLowerCase()){
        case 'chrome':
            console.log("Chrome browser is launched successfully ");
            return true;
        case 'safari':
            console.log("Safari browser is launched successfully ");
            return true;
        case 'edge':
            console.log("Edge browser is launched successfully ");
            return true;
        case 'firefox':
            console.log("Firefox browser is launched successfully ");
            return true;
        
        default:
            console.log("Invalid browser " + browserName);
            return false;
    }
}

launchBrowser('chrome'); // calling function -> calling stack 

// in stack > as soon as function gets call stack will create in stack memory and it takes some memory 
// like 0 - 3 bytes. Once function execution gets over then stack will come back to 0.
// Whenever we call the function memory will allocate in the stack memory and once function gets over then 
// stack will get deleted.

function m1(){
    console.log("M1 function");
    m2();
}

function m2(){
    console.log("M2 function");
    m3();
}

function m3(){
    console.log("M3 function");
    m1();
}

// function calling itself: recursion
function login(){
    console.log("Login func");
    login();
}

function calculatingBill(billing, tax){
    let total = billing + tax;

}

calculatingBill(1000, 200);