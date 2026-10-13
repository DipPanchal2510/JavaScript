// two D-array
// row and col is same
// symetric array

let num = [
    [1,2,3,4],
    [10,20,30,30],
    [100,200,300,400]   // 3 x 4
];
//console.log(num[2][1]);
//console.log(num.length); // always give row count

// iterate 2-d array
// index based for loop

for(let i=0; i <= num.length-1;i++){    // row count = 3
    for(let j=0; j <= num[i].length-1; j++){     // col count = 4
        console.log(num[i][j]+" ");   
    }
    console.log();
}

console.log("============================");

// for of loop

for(let n of num){
    for(let m of n){
        console.log(m);
    }
    console.log();
}

// Jagged array -> no of row having different col array 

let data = [
    [1,2,3,4,5],
    [10,20,30],
    [100,200],
    [1000]
];

// console.log(data);

for(let n of data){
    for(let m of n){
        console.log(m);
    }
    console.log();
}

console.log("============================");


for(let i=0; i <= data.length-1;i++){    // row 
    for(let j=0; j <= data[i].length-1; j++){     // col 
        console.log(data[i][j]+" ");   
    }
    console.log();
}

console.log("============================");

let prods = ["iMac","Samsung 27","MacBook Air","Motorola","MacBook Pro"]; //0-4 // 5

// reverse with for of loop

count = prods.length-1; //4
for(let e of prods){        // purpose of e is to iterate
    e = count;
    console.log(prods[e]);
    count--;
}

console.log("============================");
// reverse with for in loop

count = prods.length-1; //4
for(let e in prods){        // purpose of e is to iterate
    e = count;
    console.log(prods[e]);
    count--;
}

console.log("============================");

// 1 d array - 1 for loop
// 2 d array - 2 for loop
// 3 d array - 3 for loop

// more for loop more complexity

// in JS all the array behaves like a object