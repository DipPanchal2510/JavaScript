function getNumber(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("First")
        }, 5000)
    })
}

function getTrainerName(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Second")
        }, 3000)
    })
}

function getResponseCode(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("third")
        }, 4000)
    })
}

// 1. Promise.all() => all or nothing
// waits for all promises to succeed. If even one fail then whole array failed immedially


// Promise.all([getNumber(),getTrainerName(),getResponseCode()])
//     .then((result)=>console.log("All resolved",result))
//     .catch((error)=>console.log("ERROR ",error));


// 2 . Promise.race() -> who is finishing the finish line
// Promise.race([getNumber(),getTrainerName(),getResponseCode()])
//     .then((result)=>console.log("All resolved",result))
//     .catch((error)=>console.log("ERROR ",error));

// 3. Promise.allSettled() -> Tell me everything
// wait for all the promise either resolve/reject
// Eg. executing 50 TC whether they failed or pass

// Promise.allSettled([getNumber(),getTrainerName(),getResponseCode()])
//     .then((result)=>console.log("All resolved",result))
//     .catch((error)=>console.log("ERROR ",error));


// 4. Promis.any -> I just need one winner
// Who is finisher
// return the 1st promise to succed ... ignores the failure

// Promise.any([getNumber(),getTrainerName(),getResponseCode()])
//     .then((result)=>console.log("All resolved",result))
//     .catch((error)=>console.log("ERROR ",error));

let [a,b,c] = await Promise.all([getNumber(),getTrainerName(),getResponseCode()]);
console.log(a,b);