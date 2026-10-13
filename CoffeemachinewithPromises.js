// callback hell - pyramid of doom...

function startMachine(callback){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("1 Machine started");
            resolve();
        }, 3000)
    });
}

function boilWater(callback){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("2 boil water");
            resolve();
        }, 4000)
    });
}

function addCoffePowder(callback){
       return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("3 add coffee powder");
            resolve();
        }, 1500)
    });
}

function pourInCup(callback){
       return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("4 pour in cup");
            resolve();
        }, 2000)
    });
}

function serveTheCoffee(callback){
       return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("5 serve the coffee");
            resolve();
        }, 3000)
    });
}


// start coffee prep
// this is better version of writing the callback with promises - no callback hell

startMachine()
    .then(()=> boilWater())
    .then(()=> addCoffePowder())
    .then(()=>pourInCup())
    .then(()=>serveTheCoffee())
    .then(()=> console.log("Your coffee is ready..."))
    .catch((error)=>console.log(error));

// callback hell -> promises chain -> async await

// more better version is async await concept





