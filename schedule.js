const prompt=require('prompt-sync')();
let a=prompt("please enter the timings:-");
if (a>="6:30 am" && a<="7:30 am"){
    console.log("Exercise time");
}
else if (a>="8:00 am" && a<="8:29 am"){ 
    console.log("breakfast time");
}  
else if (a>="8:30 am" ||  a<="12:59 pm"){ 
    console.log("first coding time");
}
else if (a>="13:00 pm" && a<="14:29 pm"){  
    console.log("lunch rest time");    
}  
else if (a>="14:30 pm" && a<="15:59 pm"){  
    console.log("second coding time");
}
else if (a>="16:00 pm" && a<="16:59 pm"){
    console.log("english activity");
}         
else if (a>="17:00 pm" && a<="17:29 pm"){ 
    console.log("snacks time");
} 
else if (a>="17:30 pm" && a<="19:29 pm"){
    console.log("third coding");
}
else if (a>="19:30 pm" && a<="20:29 pm"){
    console.log("recreation activity");
}
else if (a>="20:30 pm" && a<="20:59 pm"){
    console.log("dinner time");
}
else if (a>="21:00 pm" && a<="22:59 pm"){
    console.log("extra study");
}
else{ 
    console.log("sleeping time");
}