// promise : 
// order pizza from dominoz, order is in-progress -> delivered is resolved -> but not able to delivered is reject

// 1. pending
// 2. resolve --> return the resource/ data
// 3. rejected --> reason for reject

// create new promise : using Promise keyword

let pizzaPromise = new Promise((resolve, reject) => {
    let success = false;
    if(success){
        resolve('Pizza');
    }else{
        reject('Unable to find location');
    }
});

pizzaPromise
    .then((result)=> console.log(result))
    .catch((error) => console.log(error))
    .finally(()=> console.log("Close the app"));



    function getUserInfo(userId){
        return new Promise((resolve, reject)=>{

            console.log("Fetching user details from DB....");

            setTimeout(()=>{

            
            if(userId <=0){
                reject("Invalid user id ...");
            }else{
                let user ={
                    id: userId,
                    name: "Shilpa",
                    age: 30,
                    salary: 12.33,
                }
                resolve(user);
            }
        }, 5000);
    })
    }

    getUserInfo(10)
        .then((user)=>console.log(user.name, user.id))
        .catch((error)=>console.log(error))
        .finally(()=> console.log("closing DB connection"));


// callback hell -> promises chain -> async await

// more better version is async await concept

// promise with resolve = always be resolved
function getNumber(){
    return Promise.resolve(10);     
};

getNumber()
    .then((result => console.log(result)));

// let n = getNumber();
// console.log(n); // Promise 10


// promise with resolve = always be reject with reason
function getBrowserError(){
    return Promise.reject("Invalid browser, error 500");
};

getBrowserError()
    .catch(error => console.log(error));


// giving whole promise object and need to user resolve n reject
// we can only have resolve as well
// Whenever creating object of promise 1st object is always resolve (variable name can be anything)

function getPizza(){
    return new Promise((resolve)=>{
        resolve("Pizza");
    }) 
};

getPizza()
    .then(result => console.log(result));