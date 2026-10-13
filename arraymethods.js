// 1. map

let numbers = [1,2,3];
let doubNum = numbers.map((e) => e*2);
console.log(doubNum);

// F -> C
// (F-32) *(5/9)
let fahTem = [32,35,49,42,50];

function fahToCel(fah){
    return (fah-32) * (5/9);
}

let celTemp = fahTem.map(fahToCel);
console.log(celTemp);

// 2. filter

let num = [1,2,3,4,5,6,7,8,9];
let evenNum = num.filter((e) => e % 2 === 0);
console.log(evenNum);

let employee = [
    { name: 'Neelam',age: 30,gender: "Female"},
    { name: 'Bob',age: 32,gender: "Male"},
    { name: 'Satish',age: 33,gender: "Male"},
    { name: 'Sahi',age: 34,gender: "Female"}, 
];

let empFemaleOver30 = employee.filter((emp) => {
    return emp.gender === "Female" && emp.age >= 30;
});

console.log(empFemaleOver30);

// 3. reduce

let numb = [1,2,3,4,5]; // count 15
let sum = numb.reduce((acc, num) => acc+num, 0);
console.log(sum);

// find max no.

let top = [2,10,25,30,7,37,48];
let topMax = top.reduce((max, num) => { // max = 0
    if(num > max){
        return num;
    }else{
        return max;
    }
}, top[0]);

console.log(topMax);