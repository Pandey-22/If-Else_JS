const prompt=require('prompt-sync')();
let n=parseInt(prompt("please enter your current age"));
let vaccination=parseInt(prompt("please enter the number"));
if (n>=18){
    if (vaccination==1){
        console.log("first dose");
    }
    else if (vaccination==2){
        console.log("second dose");
    }
    else if (vaccination==3){
        console.log("third dose");
    }
}
else{
    console.log("you never got vaccinated");
}