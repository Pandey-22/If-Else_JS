const prompt=require('prompt-sync')();
let a=parseInt(prompt("please enter the 1st number:-"));
let b=parseInt(prompt("please enter the 2nd number:-"));
let c=parseInt(prompt("please enter the 3rd number:-"));
if (a>c){   
    console.log("Dairy Milk");
}
else if (a==b){    
    console.log("Candy Floss");
} 
else if (a>b && a<c){    
    console.log("5 Star");  
}
else{
    console.log("Chocovaar");
}