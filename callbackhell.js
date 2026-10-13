// callback hell - pyramid of doom...

function startMachine(callback){
    setTimeout(()=>{
        console.log("1 step machine");
        callback();
    }, 2000)
}

function boilWater(callback){
    setTimeout(()=>{
        console.log("2 step boil");
        callback();
    }, 3000)
}

function addCoffePowder(callback){
    setTimeout(()=>{
        console.log("3 step add coffee powder");
        callback();
    }, 4000)
}

function pourInCup(callback){
    setTimeout(()=>{
        console.log("4 step pour in cup");
        callback();
    }, 2000)
}

function serveTheCoffee(callback){
    setTimeout(()=>{
        console.log("5 step serve coffee");
        callback();
    }, 2000)
}


// start coffee prep

startMachine(()=>{
    boilWater(()=>{
        addCoffePowder(()=>{
            pourInCup(()=>{
                serveTheCoffee(()=>{
                    console.log("Enjoy your coffee");
                })
            })
        })
    })
});

// provide the user information after 4 secs...

function getUserDetails(callback){
    console.log("Fetching user details from DB");
    
    setTimeout(()=>{
        let user={
            id: 101,
            name: "Vahi",
            email: "vahi@gmail.com",
            city:"Pune"
        }
        callback(user);
    }, 4000);
}

getUserDetails((user)=>{
    console.log("User found");
    console.log(user);
    console.log(user.city, user.email);
});