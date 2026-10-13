let u1 = {        
    name: "Dipesh",
    age: 30,
    city: "Mumbai",
    zip: 1212
};

let u2 = {        
    name: "Satish",
    age: 25,
    city: "Banglore",
    zip: 1414
};

let u3 = {        
    name: "Minal",
    age: 28,
    city: "Pune",
    zip: 5454
};

let u4 = {        
    name: "Akshay",
    age: 59,
    city: "Nashik",
    zip: 9988
};


console.log(u1); // D
console.log(u2); // S
console.log(u3); // M
console.log(u4); // A

console.log("------------------------------------");
u1 = u2;

console.log(u1); // S
console.log(u2); // S
console.log(u3); // M
console.log(u4); // A   

console.log("------------------------------------");
u2 = u3;

console.log(u1); // S
console.log(u2); // M
console.log(u3); // M
console.log(u4); // A

console.log("------------------------------------");
u3 = u4;

console.log(u1); // S
console.log(u2); // M
console.log(u3); // A
console.log(u4); // A


console.log("------------------------------------");
u4 = u1;

console.log(u1); // S
console.log(u2); // M
console.log(u3); // A
console.log(u4); // S

console.log("------------------------------------");
u1=u2=u3=u4;

console.log(u1); // S
console.log(u2); // S
console.log(u3); // S
console.log(u4); // S

console.log("------------------------------------");


let p1 = {        
    name: "Dipesh",
    age: 30,
    city: "Mumbai",
    zip: 1212
};

let p2 = p1;
console.log(p1);
console.log(p2);

console.log("------------------------------------");

p2.name="Ashish";
p2.age= 40;

console.log(p1);
console.log(p2);


console.log("------------------------------------");

let s1 = {
    name: "Fugi",
}

let s2 = {
    age: 30,
}

let s3 = {
    salary: 40.99,
}

let s4 = {...s1,...s2,...s3};
console.log(s4)


