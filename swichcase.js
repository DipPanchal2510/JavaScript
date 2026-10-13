function checkDayOfWeek(num){
    let day;
    switch(num){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednusday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            console.log("Invalid day....");
            break;
    }

    return day;
};

console.log(checkDayOfWeek(0));

function crossBrowser(browser){
    
    switch(browser){
        case "safari":
            console.log("Please launch "+browser);
            break;
        case "chrome":
            console.log("Please launch "+browser);
            break;
        case "edge":
            console.log("Please launch "+browser);
            break;
        case "firfox":
            console.log("Please launch "+browser);
            break;
        default:
            console.log("Please select correct browser "+browser);
            break;
    }
}

crossBrowser("opera");