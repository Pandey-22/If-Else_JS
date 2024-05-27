const prompt=require('prompt-sync')();
let number=prompt("please enter your number");
number=parseInt(number);
if (number%2==0){
    console.log("even");
}
else{
    console.log("odd");
}