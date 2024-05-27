const prompt=require('prompt-sync')();
let number=prompt("please enter your number");
number=parseInt(number);
if (number>=60){
    console.log("This person is senior sitizen");
}
else{
    console.log("This person is not senior sitizen");
}