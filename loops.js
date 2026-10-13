// for loop
// 1 to 10

//const { use } = require("react");

for(let i = 0; i <=10; i++){
    console.log(i);
}

// for ...of loop
const array= [1,2,3,4,5,6];

console.log('-----------------');

for(const e of array){
    console.log(e);
}
console.log('-----------------');

for(let h=0; h <= array.length-1; h++){
    console.log(array[h]);
}

console.log('-----------------');
// while
// 1 to 10

let j = 1;
while(j <=10){
    console.log(j);
    j++;
}
console.log('-----------------');

let l = 2;
while(l <=100){ // 4 6 8 10 
    console.log(l); // 2 4 6 8 10
    l = l+2; // 4 6 8 10 12
}

console.log('-----------------');
// do-while
// 1 to 10

let o = 1;

do{
    console.log(o);
    o++;
}while(o <= 10);

console.log('-----------------');
// break


// 1 to 100 -> print hi when multiplication of 5

let num = 5;
while(num <= 100){
    console.log(num);
    if(num % 5 == 0){
        console.log(num+" Hi");
        break;
    }
    num++;
}

console.log('-----------------');

const browser = ["chrome","edge","safari","firefox"];

for(const e of browser){
    console.log(e);
    if(e == "safari"){
        console.log("Launch the browser "+e);
        break;
    }
}

console.log('-----------------');

const user = {
    name : "diepsh",
    age : 31,
    city : "Mumbai",
};

for(const x in user){
    console.log(x + " : "+user[x]);
}

console.log('-----------------');

const br = ["chrome","edge","safari","firefox"];

for(const t in br){
    console.log(t+" : "+br[t]);
}