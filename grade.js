const prompt=require('prompt-sync')();
let percentage=parseInt(prompt("please enter the percentage:-"));
if (percentage>90){
    console.log("Grade is A+");    
}
else if (percentage>80 && percentage<=90){    
    console.log("Grade is A");
}    
else if (percentage>70 && percentage<=80){ 
    console.log("Grade is B+");
}  
else if (percentage>60 && percentage<=70){
    console.log("Grade is B");
}  
else if (percentage>50 && percentage<=60){
    console.log("Grade is C");
}
else if (percentage==50){
    console.log("grade is D");
}
else{
    console.log("you are fail");    
}