// arrow function -> anonymous function
// has no name
// () => 
// has no function keyword
// used in callback function


// input param : zero
// in arrow function no need to have curly braceses if there is single line


let print = () => console.log("Hello world");
print();

let pop = () => {
    console.log("Hello Dipesh");
}
pop();

let test = function(){
    console.log("Hello world");
};
test();

// arrow function with param

let printInfo = (name) => console.log("Automation", name);

printInfo("Saurabh");

// zero param
// input : 0 param
let info = () => console.log("Zero param");
info();


// one param
// input : 1 param

let printUser = userName => console.log("Hello..", userName);
printUser("NAveen");

// param 1 
let click = element => {
    console.log("check the - ", element , "visible or not");
    console.log("Click on the ", element);
    console.log("Close browser");
}

click("loginButton");

// add 2 param
// two param : x , y
// return x+y

// if there is single then no need to mention return and even if return needs to mention then curly braceses mandatory

let add = (x, y) => x + y;
let res = add(10,10);
console.log(res);

// but if have multiple lines then need to mention return

/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns {number} z
 */
let addition = (x, y) => {
    console.log("Additing two numbers ");
    let z = x + y;
    return z;
};

let addd = addition(100,200);
console.log(addd);

let division = (x, y) => x/y;

let div = division(10,5);
console.log(div);

let findElement = (id) => `//div[@id='${id}']`;
let id = findElement("Naven1234");
console.log(id);

// launch browser : ch, ff, safa, ed
// input : 1 param (browser)
// return boolean
// found : true
// not found : false

/**
 * 
 * @param {String} browserName 
 * @returns 
 */
let launchBrowser= browserName => {
    console.log("Trying to launch",browserName);
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
            console.log("Please pass the correct browse name : chrome, safari, firefox, edge but you have pass " +browserName);
            return false;
    }
}

let openBrowser = launchBrowser("chrome");
console.log(openBrowser);

if(openBrowser){
    console.log("Enter url");
}else{
    console.log("Do enter url because invalid browser");
};


let sum = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let divs = (a, b) => a / b;

let s1 = sum(10,20);
console.log(s1);

let s2 = sub(10,20);
console.log(s2);

let s3 = mul(10,20);
console.log(s3);

let s4 = divs(10,20);
console.log(s4);

// give a string and convert in lower case

let n1 = name => name.trim().toLowerCase();
let n = n1("    SATISH");
console.log(n);

//

/**
 * 
 * @param  {...String} emp1 
 */
let printEmpList = (...emp1) => {
    console.log(emp1.length);
    console.log(emp1);
};

printEmpList("Naveen","Sakshi","Atul");


// arrow function with object

let customer = {
    name: "tome",
    age: 30,
    salary: 12.22,
    isActive: true,
};

let printCustomerInfo = ({name, salary}) =>{
    console.log(name, salary);
}

printCustomerInfo(customer);