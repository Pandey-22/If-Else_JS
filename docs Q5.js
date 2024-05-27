const prompt=require('prompt-sync')();
let number=prompt("pealse enter your number");
number=parseInt(number);
if (number>=18){
    console.log("This person is eligible for voting");
}
else{
    console.log("This person is not eligible for voting");
}