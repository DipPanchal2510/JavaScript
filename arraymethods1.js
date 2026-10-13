// 1. every
let num = [1,2,3,4,5,6,7,-20];
let flag = num.every((e) => e < 10);
console.log(flag);

// 2. some -> atleast one element of the array should pass the condition
let number = [1,3,5,7,11,9];
let fg = number.some((e) => e % 2 === 0);
console.log(fg);

// 3. find   -> return a value of 1st element of the array which satisfies specific condition
let numbers = [1,3,5,99];
let fgg = numbers.find((e) => e % 2 === 0); 
console.log(fgg);

// 4. indexOf
let fruit = ["Apple","Banana","Mango","Pear"];
let inx= fruit.indexOf("Mango");
console.log(inx);

// 5. lastIndexOf
let fruitss = ["Apple","Apple","Banana","Mango","Pear"];
let lastIndex = fruitss.lastIndexOf("Apple");
console.log(lastIndex);

// 6. reverse

let frr = ["Apple","Banana","Mango","Pear"];
let revFruits = frr.reverse();
console.log(revFruits);

// 7. sort -> alphabetical
let frrtt = ["Watermelon","Kiwi","1234Orange","Apple","Pineapple","Banana","Mango","Pear"];
let sortFr = frrtt.sort();
console.log(sortFr);
