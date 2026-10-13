// anonymous function dosent have name. Its only present in JS.
// no function name
// expression name: test

let test = function (){
    console.log("Hello");
}

// calling it using expression name
test();


let add = function (x, y){
    return (x, y);
};

let a = add(10, 30);
console.log(a);


let launchBrowser = function (browserName){
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
            isLaunched = false;
            return false;
    }
};

let browser = launchBrowser('IE');
console.log(browser);