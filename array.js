let myArray = [];
let numbers = [1,2,3,4,5,6];
let fruits = ["Apple","Per","Watermelon","Pineapple"];

let lang = ["Java","JS","C++","Python"]

// 1. push
lang.push("Ruby","HTML","C#")
console.log(lang)   // adding in last

// 2. pop
lang.pop();
console.log(lang);  // removing from last

// 3. shift
let firstLang = lang.shift();   // remove first element from array and return array
console.log(firstLang);
console.log(lang);

// 4. unshift
console.log(lang.length);
lang.unshift("C#");
console.log(lang);
console.log(lang.length);

// 5. splice 
console.log("-------------");
console.log(fruits);
fruits.splice(1,1,"Mango","Orange");     // start index , count of element, new element
console.log(fruits);

// 6. slice

console.log("-------------");
let pop= [1,2,3,4,5,6];
const newPop = pop.slice(1,4);
console.log(newPop);
//console.log(pop);

// 7. Conccat (concate two or more)

console.log("-------------");

let fr = ["Apple","Per","Watermelon","Pineapple"];
let num = [1,2,3,4];

const mix = num.concat(fr); 
console.log(mix);

// 8. index of

console.log("-------------");
// if any element is not in array and try to find index for it then it will return -1
// if try to find index of duplicate element then it will return 1st available index

let color = ["Black","Red","Green","Blue","Yellow","Gray","Blue"];
let colIndex = color.indexOf("Burgandi");   // 
console.log(colIndex);

let colInd = color.indexOf("Blue",color.indexOf("Blue")+1);
console.log(colInd);

// 9. includes
console.log("-------------");
let test = ["admin","customer","Supplior","Seller","Vendor"];
const flag = test.includes("Vendor","Dipesh");
console.log(flag);


// 10. for each
console.log("-------------");

let nm = [1,2,3,4,5,6,7];
nm.forEach((r)=>{
    console.log(r * 2);
});
