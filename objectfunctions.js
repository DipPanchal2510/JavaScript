
let emp  = {
    name: "Shreya",
    age: 30,
    salary: 33.33,
    coding(){
        console.log(this.name, "Coding");
    },
    testing(){
        console.log(emp.name, "Testing");
        this.coding();
    },
    printData(x, y){
        return x + y;
    },
    data: function(){
        console.log("Hello", this.name);
    },
    reading:() => {
        console.log("Hello reading", emp.name);
    },

};

console.log(emp.name, emp.age, emp.salary);
emp.coding();
emp.testing();
let r1=emp.printData(100, 200);
console.log(r1);
emp.data();
emp.reading();

let loginPage = {
    username : "user",
    password: "pass",
    loginBtn: "//[@id='login']",

    doLogin(appUsername, appPassword){
        this.username = appPassword;
        this.password = appPassword;

    },

    forgotPassword(){
        console.log("Change password");
    },

    getFooters(){
        console.log("Footer links");
    },
}

// object destructuring

let user={
    name: "Dipesh",
    age: 30,
    salary: 33.33,
    address:{
        flat: 101,
        apprtment: "New A wing",
        city:'LA',
        zip: 1101,
        location:{
            long: 11.11,
            lat:44.44,
        }
    }
   
};

let {name, age, address:{flat, city ,location:{lat}}} = user;
console.log(name, age, flat, city, lat);