const prompt=require('prompt-sync')();
let num=parseInt(prompt("please enter your 3 digit largest number:-"));
if (num==999){
    console.log("Yes, This number is 3 digit largest.");
}
else{
    console.log("No, This number is not 3 digit largest.");
}