const prompt=require('prompt-sync')();
let age=parseInt(prompt("please enter your age"));
let days=parseInt(prompt("please enter your number of days"));
 if (age>=15 && age<25){   
    amt=days*700;  
    console.log("Total wages is",amt)     
}
else if (age>=25 && age<35){   
    amt =days*750;   
    console.log("Total wages is",amt);  
}  
else if (age>=35 && age<=45){
    amt=days*800;     
    console.log("Total wages is",amt);  
}  
else if (age>=45 && age<=55){   
    amt=days*850;    
    console.log("Total wages is",amt);
}   
else{   
    console.log("you are wasting pay");
}
