// function expression
// if you have function reference name then always need to use reference name instead of actual function name

test("Rauby");

function test(name){
    console.log(name);
};

// getUserData("Dipe");    // function expression cannot be hoisted

let getUserData = function gettingUserDetailsFromDashboardPage(name){
    console.log("Hello user details");
};

getUserData("tom");  // calling the function ref name (expression name)

console.log(typeof getUserData);    // function
console.log(typeof gettingUserDetailsFromDashboardPage);    // undefined


console.log("-------------------------------------");

let getData = function getting_user_test_data_from_csv(name, age){
    console.log(name, age);
};

getData("anshul", 34);
console.log(getData.name);