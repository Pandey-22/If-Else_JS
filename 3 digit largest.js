const prompt=require('prompt-sync')();
let num=prompt("please enter your largest 3 digit number");
num=parseInt(num);
if (num==999){
    console.log("Yes, This number is largest 3 digit");
}
else{
    console.log("No, This number is not largest 3 digit");
}