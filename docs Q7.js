const prompt=require('prompt-sync')();
let number=prompt("please enter your number");
number=parseInt(number);
if (number>99 && number<=999){
    console.log("This number is 3 digit");
}
else{
    console.log("This number is not 3 digit");
}