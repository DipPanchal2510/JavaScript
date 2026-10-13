// Mutator 
let num = [1,2,3,4,5];
console.log(num.length);


// 1. push -> add element at the end of an array
let e1= num.push(6);
console.log(num);
console.log(e1);

// 2. pop -> remove last element
num.pop();
console.log(num);

// 3. unshift -> add element at the beginning of the array
let product = ["iMac", "Samsung", "iPhone", "Macbook"];
product.unshift("Motorolla");
console.log(product);

// 4. shift -> remove the 1st element
product.shift();
console.log(product);

// 5. splice -> add, remove, replace
// formula -> startIndex, deletCount, item's 

let cart = ["iMac", "Samsung", "iPhone", "Macbook"];

// cart.splice(0,0,"Motorola");
// console.log(cart);

// cart.splice(0,0,"Motorola","Vivo");
// console.log(cart);

// cart.splice(0,2,"Jio");
// console.log(cart);

// cart.splice(2,1,"Jio");
// console.log(cart);

// cart.splice(0,cart.length,"Jio");
// console.log(cart);

// cart.splice(cart.length,1,"Jio");
// console.log(cart);

// cart.splice(cart.length-2,2,"Jio");
// console.log(cart);

// cart.splice(0, cart.length);
// console.log(cart);

cart.splice(2,0, "Mouse");
console.log(cart);


// 6. slice 

let cart = ["iMac", "Samsung", "iPhone", "Macbook","Canon"];

let x1 = cart.slice(0,2);
console.log(x1);

let x2 = cart.slice(0,10);
console.log(x2);

let x3 = cart.slice(0);
console.log(x3);

let x4 = cart.slice(2);
console.log(x4);

let x5 = cart.slice(-4);     // need to check with chat
console.log(x5);

// 7. reverse -> not receommended bcos change original array instead loop

let cart = ["iMac", "Samsung", "iPhone", "Macbook","Canon"];
cart.reverse();
console.log(cart);


// 8. indexof -> if something is not available then will get -1

let cart = ["iMac", "Samsung", "iPhone", "Macbook","Canon", "Macbook"];
let i = cart.indexOf("Macbook");
console.log(i);

// 2nd occurance of duplicate product
let m = cart.indexOf("Macbook",i+1);
console.log(m);


let cart = ["iMac", "Samsung", "iPhone", "Macbook","Canon"];
let i = 0;
while(i <= cart.length - 1){
    let p = cart.indexOf('iMac',i);
    if(p == -1) break;
    console.log(p);
    i = p + 1;
};

// 9. includes
let num = [1,2,3,4,5];
console.log(num.includes(1));
console.log(num.includes("Dip"));

// 10. join : join all the element is string with separator

let arr = ['Naveen', 'Automation', '2026 batch'];
let newArr = arr.join(" | ");
console.log(newArr);

// 11. toString
let arr = ['Naveen', 'Automation', '2026 batch'];
console.log(arr.toString());
console.log(arr);

// 12. at : element at given index
let num = [1,2,3,4,5];
console.log(num.at(3));
console.log(num.at(-1));
console.log(num.at[-1]); // undefined

// 13. for each method
let cart = ["iMac", "Samsung", "iPhone", "Macbook","Canon"];
cart.forEach((e) =>{
    console.log(e.toUpperCase());
});

let num = [1,2,3,4,5];
num.forEach((e) => {
    console.log(e + 2);
});

