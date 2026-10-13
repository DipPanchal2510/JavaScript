let user = {
    name: "tome",
    age: 30,
    salary: 45.44,
    isActive: true,
    
    address: {          // child object
        flat: 101,
        building: "New bhavan",
        city: "Pune",
        zip: 1414
    }
};

console.log(user);

for(let e in user){     // e will point to index (key)
    console.log(user[e]);    
    if(user[e] === 30){
        console.log("Found age");
        break;
    } 
}

console.log("-------------------------");

console.log(Object.keys(user));     // will show only keys
console.log(Object.keys(user).length);  
console.log(Object.values(user));   // will show only values
console.log(Object.entries(user));  // will show key-value pair

console.log("-------------------------");
// JS objec to JSON

let userJson = JSON.stringify(user,null,2);
console.log(userJson);

