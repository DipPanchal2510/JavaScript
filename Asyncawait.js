// async - await
// just a syntax of JS to improve callback hell and promises chain...
// to avoid the payrimd doom as well

// async with function -> will always retun promise
// await with step


async function getNumber(){
    return 100;
}

getNumber()
    .then(n => console.log(n));

let n = await getNumber();
console.log(n);


function getUser(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve({name: "dop", age: 30});
        }, 3000);
    })
}

// getUser()
//     .then((user)=> console.log(user));

let user = await getUser();
console.log(user);


async function getTrainer() {
    return "Naveen";
};

let t = await getTrainer();
console.log(t);


console.log("--------------------------------------------");

// callback hell - pyramid of doom...

function startMachine(callback){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("1 Machine started");
            resolve(true);
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

async function makeCoffee(){
    try{
        let flag = await startMachine();
        console.log(flag);
        await boilWater();
        await addCoffePowder();
        await pourInCup();
        await serveTheCoffee();
        console.log("Enjoy your coffee......");
    }catch(error){
        console.log(error);
    }finally{
        console.log("Close the DB");
    }
    
}

await makeCoffee();


// async - await
// 1. function written with async -- it will aways return a promise
// 2. if a function return a Promise (resolve, reject) -> call it using with await
// 3. we should not write await without async function
// 4. async func -> its not mandatory to write await but it will return Promise
// 5. if in function have await step then function should be async


