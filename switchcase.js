const prompt=require('prompt-sync')();
let day=prompt("please enter the name of day:-");
switch(day){
    case "Monday":
        console.log("Day - 1");
        break;
    case "Tuesday":
        console.log("Day - 2");
        break;
    case "Wednesday":
        console.log("Day - 3");
        break;
    case "Thursday":
        console.log("Day - 4");
        break;
    case "Friday":
        console.log("Day - 5");
        break;
    case "Saturday":
        console.log("Day - 6");
        break
    case "Sunday":
        console.log("Day - 7");
        break;
}