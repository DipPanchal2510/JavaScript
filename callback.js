// Callback function
// async call/ task -- once this task is completed -- then only callback function will called

//const { use } = require("react");

function greet(name, callback){
    console.log("Hello " + name);
    callback();
}

// this is callback function
function welcome(){
    console.log('Welecome!!!!!');
}

greet("Dipesh", welcome);

console.log('---------------------------')


// callback function with async =>

function printInfo(name, callback){
    //async task
    setTimeout(function(){
        console.log("Printing info "+name);
        callback("Call me back");
    },1000) // static wait
}

// callback
function displayMsg(msg){
    console.log(msg)
}

printInfo("Dipesh", displayMsg);

console.log('---------------------------');

function fetchUserData(userId, callback){
    setTimeout(function(){
        const users = {
            1 : {id: 1, name: "Dipesh"},
            2 : {id: 2, name: "POP"},
        };

        const user = users[userId];
        if(user){
            callback(null, user) // structure = callback(error, sucessData)
        }else{
            callback("User not found...", null)
        }

    },1000);
};

function userData(error, user){
    if(error){
        console.error("Error : " , error);
    }else{
        console.log("User : " , user);
    }
};


fetchUserData(1,userData);

