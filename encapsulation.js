class Employee {
    name;
    age;
    #salary;

    constructor(name, age, salary){
        this.name = name;
        this.age = age;
        this.#salary = salary;
    }

    setSalary(salary){
        this.#salary = salary;
    }

    getSalary(){
        return this.#salary;
    }

}

let emp = new Employee("Dipesh", 30, 12.33);
console.log(emp.name, emp.age);

let sal = emp.getSalary();
console.log(sal);

emp.setSalary(23.23);
let s1 = emp.getSalary();
console.log(s1);


class LoginPage{

    #username;
    #password;

    constructor(username, password){
        this.#username = username;
        this.#password = password;
    }

    getUsername(){
        return this.#username;
    }   
    getPassword(){
        return this.#password;
    }
    setUsername(username){
        this.#username = username;
    }
    setPassword(password){
        this.#password = password;
    }
}

let lp = new LoginPage("Dip11", "Dip1234");
let un = lp.getUsername();
console.log(un);

let ps = lp.getPassword();
console.log(ps);

lp.setPassword("Dip@1025")

let ps1 = lp.getPassword();
console.log(ps1);


class User{

    name;
    #age;
    #salary;

    constructor(name, age, salary){
        this.name = name;

        if(age >= 11){
            this.#age = age;
        }

        if(salary >= 10){
            this.#salary = salary;
        }
    }

    setAge(age){
        if(age >= 10){
            this.#age = age;
        }else{
            console.log("Age must be greater than 10");
        }
    }
    getAge(){
        return this.#age;
    }
}

let u1 = new User("Dip", 10, 5);
let t1 = u1.getAge();
console.log(t1);
