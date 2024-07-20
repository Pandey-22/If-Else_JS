const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter your number:-"));
if (number%4==0){
    console.log(number+1);
}
else{
    console.log(number-1)
}