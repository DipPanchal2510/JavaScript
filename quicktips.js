//const { use } = require("react");

// 1. find unique values from array
const arr = [1,2,3,4,5,6,7,8,1,1,2,2,3,5,7,5,5,3,3,2];
const uniqueArray = [...new Set(arr)];
console.log(uniqueArray)

// 2. convert int into Strings
const num = 10;
const numStr = num + ''; // 10
console.log(numStr+10); //1010
// or

const numStr1 = String(num); //10
console.log(numStr1+20)

// 3. float to int
const floatNum = 3.11;
const intNum = parseInt(floatNum);
console.log(intNum);

// 4. check if variable is a number
const value = "Nim";

if( typeof value === 'number' && !isNaN(value)){
    console.log("Is a number");
}else{
    console.log("Not a number");
};

// 5. Swap variable value without using third variable
let a = 55;
let b = 10;

[a,b] = [b,a];
console.log(a,b);

// 6. Check if object has specific property
const person = {
    name: "jon",
    age: 29,
}

if(person.hasOwnProperty('age')){
    console.log("Person has name property");
}else{
    console.log("Person dosent has name property");
}

// 7. Remove falsy value from the array (false, '0',"",null, underfined, NaN)
const values = [0,1,false,2,"",3,null,4,NaN,5,undefined];
const newValues = values.filter(Boolean);      // Boolean is filtering
console.log(newValues);

// 8. String convert to UpperCase or LowerCase

const str = "dipesh";
const upStr=str.toUpperCase();
console.log(upStr);
console.log(upStr.toLowerCase());

// 9. Check if array contains specific value

const language = ["Java","JavaScript","Python","Ruby"];
if(language.includes("C#")){
    console.log("Yes its present");
}else{
    console.log("No, its present");
};

// 10. Check if the array is empty array or not

let emptyArray = [];
if(emptyArray.length == 0){
    console.log("Its empty");
}else{
    console.log("Its not empty");
};

// 11. generate a random number

const max = 50;
const min = 10;
const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
console.log(`Random number : ${randomNum}`);

// 12. String to num
const stringNum = '50.000001';
let abb = parseFloat(stringNum);
console.log(abb)

// 13. Join array elements into a String

const words = ["Hello","Dipesh"];
const sentence  = words.join(" : ");
console.log(sentence);

// 14. Check object property dynamically

const user = {
    name: "top",
    age: 26,
    dob: '01-01-1995',
};

console.log(user['name']);
console.log(user['dob']);

// 15. clone an array or object
const marks = [10,20,30,40,50];
const clone = [...marks];
console.log(marks);
console.log(clone);

const clone1 = {...marks};  // spread operator ...
console.log(clone1);

// 16. Convert object to array

const user1 = {
    name: "top",
    age: 26,
    dob: '01-01-1995',
};

// a. keys array
const keys = Object.keys(user1);
console.log(keys);

// b. values array
const vals = Object.values(user1);
console.log(vals);

// c. key and values array
const keyValue = Object.entries(user1);
console.log(keyValue);

// 17. get current date and time
const currentDate = new Date();
console.log(currentDate.toLocaleString());

// 18. check if specific variable is defined or not

let o;

if(typeof o === undefined){
    console.log("Variable is not defined");
}else{
    console.log("Variable is defined");
};

// 19. truncate an array

const testingArray = [0,1,2,3,4,5,6,7,8];
testingArray.length = 4;        // holds initial 3 values
console.log(testingArray);

// 20. Last item in array
const popArr = [0,1,2,3,4,5,6,7,8];
const n1 = popArr.slice(-1);
console.log(n1);

