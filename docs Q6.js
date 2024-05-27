const prompt=require('prompt-sync')();
let number=prompt("please enter your number")
number=parseInt(number)
if (number%5==0){
    console.log("Hyy")
}
else{
    console.log("Bye")
}