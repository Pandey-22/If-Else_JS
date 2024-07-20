const prompt=require('prompt-sync')();
let age=parseInt(prompt("please enter your corrent age:-"));
if (age>=18){
    console.log("This person is eligible for voting");
}
else{
    console.log("This person is not eligible for voting");
}