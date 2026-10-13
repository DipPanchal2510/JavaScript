//
// function with class : method
// function without class : function


// 1. no param, no return
function test(){
    console.log("Simple method");
};

test();
console.log("bye");


function click(){       // void function
    console.log("Click on the element");
}

click();

console.log("-------------------------------------");

// 2. no param, some return
// input param : zero , return type : number

function getNumber(){
    console.log("Getting number");
    return 100;
};

let num = getNumber();
console.log(num + 100);

// input param : zero , return type : number
function launchBrowsers(){
    console.log("Lanching chrome");
    return true;
};

let browser = launchBrowsers();
console.log(browser);

if(browser){
    console.log("enter url");
}else{
    console.log("Dont enter the url");
};


function getTrainerName(){
    return 'Naveen';
};

let trainerName = getTrainerName();
console.log(trainerName);
console.log(getTrainerName);
console.log(typeof getTrainerName);

console.log("-------------------------------------");

// 3. input param, some return
// function : add, input param : two , return : 

function add(x, y){
    console.log("Add two numbers");
    let z = x + y;
    return z;
}

let m1 = add(10, 30);
console.log(m1);

let s = add(100, "Dip");
console.log(s);

let s1 = add("Hello ", "Dip");
console.log(s1);

console.log("---------------------------------------------");

function calculateBilling(foodBill, drinksBill ,tax){
    console.log("Calculating bill ammount : ");
    return foodBill + drinksBill + tax;
}

let totalBill = calculateBilling(1000, 500, 50);
console.log(totalBill);
 
totalBill = calculateBilling(12000, 5000,0);
console.log(totalBill);


total = calculateBilling(12000, 5000);
console.log(total);     //NaN because of missing Tax amount


console.log("---------------------------------------------");

// WAF:
//Launch a browser
//Params : (browserName) > chrome, safari, edge, firefox
//confirmation message on console
//return : true -> if browser is valid
//Invalid browser : message should be display on console and return false

// break and return cannot to together, because after function give return true then it will not execute ahead

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

let isBrowserLaunched= launchBrowser('      cHrOmE   ');
console.log(isBrowserLaunched);

if(isBrowserLaunched){
    console.log("https://www.google.co.in");
}else{
    console.log("Browser doesnt launch");
}



console.log("---------------------------------------------");

function printing (){
    console.log("printing 1");
}


function printing (){
    console.log("printing 2");
}

printing();

