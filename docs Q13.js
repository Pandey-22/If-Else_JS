const prompt=require('prompt-sync')();
let number=prompt("please enter your number");
number=parseInt(number);
if (number%4==0){
    console.log(number+1);
}
else{
    console.log(number-1)
}