const prompt=require('prompt-sync')();
let number=prompt("please enter a number");
number=parseInt(number);
if (number>0 && number<=9){
    console.log("This number is 1 digit");
}
else if (number>9 && number<=99){
    console.log("This number is 2 digit");
}
else if (number>99 && number<=999){
    console.log("This number is 3 digit");
}
else{
    console.log("This number is more than 3 digits")
}