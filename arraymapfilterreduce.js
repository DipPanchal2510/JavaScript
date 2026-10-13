// 1. map -> transform every element of the given array
// return ne array ;

let num = [1,2,3,4,5];
let newArr = num.map( e => e * 2);
console.log(newArr);

let sqrArr = num.map( e => e * e);
console.log(sqrArr);

let empName = ['Naveen','Atul','Nitin'];
let empArr = empName.map(e => e.toUpperCase());
console.log(empArr);

let num = [1,2,3,4,5,6,7,8,9,10];
num.forEach( (e) => {
    if(e % 2 === 0){
        console.log(e);
    }
});

// 2. filter : remove from the existing array on the basis of given condition
let numbers = [10,20,30,40,50,60,70,44,33,99,38];
// give all the numbers which greater than 30

let grtNum = numbers.filter( e => e > 30);
console.log(grtNum);
console.log(typeof grtNum);

let evnNum = numbers.filter( e => e % 2 === 0);
console.log(evnNum);

let oddNum = numbers.filter( e => e % 2 === 1);
console.log(oddNum);