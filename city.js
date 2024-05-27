const prompt=require('prompt-sync')();
let city=prompt("please enter the any name of city");
if (city=="delhi"){
    monument="red fort";  
    console.log("monument=",monument);
} 
else if (city=="agra"){
    monument="taj mahal";  
    console.log("monument=",monument);
}   
else if (city=="jaipur"){ 
    monument="jal mahal";
    console.log("monument=",monument);
}
else{
    console.log("i don't know this city");
}