const prompt=require('prompt-sync')();
let num=prompt("please enter your smallest 4 digit number");
num=parseInt(num);
if (num==1000){
    console.log("Yes, This number is smallest 4 digit");
}
else{
    console.log("No, This number is not smallest 4 digit");
}