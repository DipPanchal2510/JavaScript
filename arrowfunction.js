const squre = num => num*num;   // one parameter
let squreRoot = squre(3);
console.log(squreRoot);

const msg = () => 'Hello JS...';    // no parameter
console.log(msg());

const add = (a,b) => a+b;   // multiple parameter should in bracket
let ad = add(10,38);
console.log(ad);

const person = {
    firstname:"Naveen",
    lastname : "Panchal", 
};

const personDetails = person => `${person.firstname} ${person.lastname}`;   // arrow function with object
const deta = personDetails(person);
console.log(deta);

//
const greet = (username='guest', age=0) => `Hello ! ${username} you are ${age} years old`;
const g1 = greet();
console.log(g1);

const g2 = greet("Dipesh",30);
console.log(g2);


// arrow function with rest parameter
const sum =(...numbers) => numbers.reduce((acc, num) => acc+num,0);
let sumNumb= sum(1,2,3,3,4,5,5,6);
console.log(sumNumb);

const browserInfo = (browser = "chrome", ...details) => {
    console.log(`Browser : ${browser}`);
    console.log("Other details :", details);
};

browserInfo("Safari","110","WebKit","iMac","Headless");
//console.log();

///
const findMaxNum = (a,b,c) => {
    return Math.max(a,b,c);
}

let max = findMaxNum(24,487,339);
console.log(max);