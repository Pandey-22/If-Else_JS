const prompt=require('prompt-sync')();
let pin=parseInt(prompt("enter your 4 digit pin number:"));
let m=25000;    
if (pin==1234){
    console.log("welcome to state bank of india");
    console.log("1-withdraw");  
    console.log("2-balance enquiry");  
    console.log("3-fast cash");   
    let c=parseInt(prompt("please choose transactions:"));            
    if (c==1){
        console.log("invalid cash"); 
    }           
    else if (c==2){       
        console.log("your available amount:",m);
    }    
    else if (c==3){   
        console.log("1.5000");   
        console.log("2.10000");
        console.log("3.15000");
        console.log("4.20000");
    }
let w=parseInt(prompt("enter withdraw amount:"));      
    if (w<m && w%100==0){            
        console.log("please take your amount:",w);       
    }
    else{           
       console.log("4.20000");   
    }
    let f=parseInt(prompt("enter fast cash option:"));
    if (f==1){
        console.log("please take cash 5000");
    }
    else if (f==2){
        console.log("please take cash 10000:");
    }
    else if (f==3 ){
        console.log("please take cash 15000:");
    }
    else if (f==4){
        console.log("please take cash 20000");
    }
    else{
        console.log("invalid fast cash option:");
    }
}
else{
    console.log("wrong pin");
}