let products = ["iMac","Samsung 27","MacBook Air","Motorola","MacBook Pro"]; //0-4 // 5

//console.log(typeof products);

// 1. index based loop
for(let i=0; i<= products.length-1; i++){
    console.log(products[i]);
    if(products[i] === "MacBook Air"){
        console.log("Found the product");
        break;
    }
}

console.log("----------------------");

// 2. for of loop  -> it represent value , its only forward direction
// use for array

for(let e of products){
    console.log(e);
    if(e === "MacBook Air"){
        console.log("Found the product");
        break;
    }
}


console.log("----------------------");

// reverse order
for(let i= products.length-1; i>=0; i--){
    console.log(products[i]);
}

// Reverse using for of loop

console.log("----------------------");


let num = [1,2,3,4,5]; // 5; 0-4

for(let e of num){
    console.log(e);
}

console.log("----------------------");

let empData = ["Tom", 33.33, true, 101, "Pune"];
//empData[-1] = 100;      // property
//empData[-100] = 200;    // property
console.log(empData);

// e is variable 
// of is keayword
// automatic increamental direction

for(let e of empData){      
    console.log(e);
}

//console.log(empData);   // print on console but cannot write logic or condition
console.log("----------------------");

// 3. for in loop -> it represent index
// use for Object

let prods = ["iMac","Samsung 27","MacBook Air","Motorola","MacBook Pro"]; //0-4 // 5

for(let e in prods){
    console.log(e, " = ", prods[e]);
}