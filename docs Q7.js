const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter your number:-"));
if (number>99 && number<=999){
    console.log("This number is 3 digit");
}
else{
    console.log("This number is not 3 digit");
}