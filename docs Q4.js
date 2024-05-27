const prompt=require('prompt-sync')();
let number=prompt("please enter your number");
number=parseInt(number);
last_digit=number%10;
if (last_digit%3==0){
    console.log("yes");
}
else{
    console.log("no");
}