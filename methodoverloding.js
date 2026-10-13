// Method overloading -> is always comile time poly-morphism

function print(){
    console.log("Hi ");
};

function print(name){
    console.log("Hi " +name);
};

function print(name, age){
    console.log("Hi " +name +" "+age);
};

//print("Dipesh");
// run test case on remote maching -> browserName, browserVersion, remoteExecution


function displayBrowserInfo(browserName, browserVersion, remoteExecution){

    if(typeof browserName === 'string' && typeof remoteExecution === 'boolean'){
        console.log(`Brower : ${browserName}, 'Brower version :' ${browserVersion} , 'remoteEx :'${remoteExecution}`);

    }else if(typeof browserVersion === 'number'){
        console.log(`Brower : ${browserName}, 'Brower version :' ${browserVersion} `);
    }else{
        console.log(`Brower : ${browserName}`);
    }

};

displayBrowserInfo("chrome", 115, true);
displayBrowserInfo("chrome", 125);
displayBrowserInfo("safari");




