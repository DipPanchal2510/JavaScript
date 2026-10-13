
// default param -> with default value
function greet(name ="Naveen"){
    console.log("Hello " +name);
}

greet("Smita");

function openBrowser(browserName = 'chrome'){
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
            console.log("Please pass the correct browse name : chrome, safari, firefox, edge " +browserName);
            return false;
    }
}

let res = openBrowser('IE');
console.log(res);


function voting(name, age = 16){
    console.log(name,age);
}

voting('Tom');
voting('Tom', 20);
voting('Aishu', 40);

function createUser(name = 'Anonymous', role = 'viewer'){
    console.log(name, role);
}

createUser();
createUser("Naveen");
createUser("Naveen", "Admin");

function add(a, b =10){
    console.log(b);
    return a + b;
}

let t1 = add(20);
console.log(t1);

let t2 = add(5, undefined); // undefined will trigger default value
console.log(t2);

let t3 = add(5,null);   // null will not trigger default value
console.log(t3);

let t4 = add(20, NaN);
console.log(t4);

let t5 = add();
console.log(t5);


function createCustomer(name = "Dipesh", lastName){
    console.log(name, lastName);
}

//createCustomer(name, 'panchal');


function launchBrowser(browserName = 'chrome'){
    console.log("Launching browser : " + browserName);
    let isLaunched = true;

    switch(browserName.trim().toLowerCase()){
        case 'chrome':
            console.log("Chrome browser is launched successfully ");
            break;
        case 'safari':
            console.log("Safari browser is launched successfully ");
            break;
        case 'edge':
            console.log("Edge browser is launched successfully ");
            break;
        case 'firefox':
            console.log("Firefox browser is launched successfully ");
            break;
        
        default:
            console.log("Invalid browser " + browserName);
            console.log("Please pass the correct browse name : chrome, safari, firefox, edge but you have pass " +browserName);
            isLaunched = false;
            break;
    }
    return isLaunched;
}

let result = launchBrowser();
console.log(result);
