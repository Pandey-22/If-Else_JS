const prompt=require('prompt-sync')();
let age=parseInt(prompt("please enter your current age:-"));
if (age>=60){
    console.log("This person is senior sitizen");
}
else{
    console.log("This person is not senior sitizen");
}
