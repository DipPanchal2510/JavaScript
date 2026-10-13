function checkAge(age){
    if(age >= 18 ){
        console.log("Old enough to vote");
    }else{
        console.log("Sorry, you are not allow to vote..");
    }
}

checkAge(20);
//checkAge(17);

function checkNum(number){
    if(number > 0){
        console.log("Number is positive");
    }else if(number < 0){
         console.log("Number is negative");
    }else{
         console.log("Number is zero");
    }
};

checkNum(0);

//nested if-else

function checkGrade(score){
    let grade;
    if(score >= 90){
        grade = 'A';
    }else{
        if(score >= 80){
            grade = 'B';
        }else{
            if(score >= 70){
                grade = 'C'; 
            }else{
                if(score >= 60){
                    grade = 'C';
                }else{
                    grade = 'D';
                }
            }
        }
    }

    console.log(grade);
};

checkGrade(74);


function launchBrowser(browser){
    //let  = "chrome";
    if(browser == "chrome"){
        console.log("Launch chrome browser");
    }if(browser == "safari"){
        console.log("Launch safari browser");
    }if(browser == "firefox"){
        console.log("Launch firefox browser");
    }if(browser == "edge"){
        console.log("Launch edge browser");
    }else{
        console.log("Please pass correct browser details...")
    }

};

//launchBrowser("chrome");

// if-elseif

function triggerBrowser(browser){
    //let  = "chrome";
    if(browser == "chrome"){
        console.log("Launch chrome browser");
    }else if(browser == "safari"){
        console.log("Launch safari browser");
    }else if(browser == "firefox"){
        console.log("Launch firefox browser");
    }else if(browser == "edge"){
        console.log("Launch edge browser");
    }else{
        console.log("Please pass correct browser details...")
    }

};

//triggerBrowser("safari");


// switch case




