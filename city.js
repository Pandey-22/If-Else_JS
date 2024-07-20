const prompt=require('prompt-sync')();
let city=prompt("please enter the any name of city:-");
if (city=="Ayodhya"){
    monument="Ram Mandir";  
    console.log("monument:-",monument);
} 
else if (city=="Mathura"){
    monument="Prem Mandir";  
    console.log("monument:-",monument);
}   
else if (city=="Kashi"){ 
    monument="Kashi Vishwanath Mandir";
    console.log("monument:-",monument);
}
else{
    console.log("i don't know this city");
}