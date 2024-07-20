const prompt=require('prompt-sync')();
let A=parseInt(prompt("please enter a 1st number:-"));
let B=parseInt(prompt("please enter a 2nd number:-"));
let C=parseInt(prompt("please enter a 3rd bumber:-"));
let D=parseInt(prompt("please enter a 4th number:-"));
if (A>B && C>D){    
    console.log("A and C greater than B and D");
}
else if (A>B){    
    console.log("yes A is great than B");
}     
else if (C>D){   
    console.log("yes C greter than D");
}       
else{    
    console.log("no A is not greater than B and C is also not greater than D");
}