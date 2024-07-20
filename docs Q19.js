const prompt=require('prompt-sync')();
let p=parseInt(prompt("please enter marks for physics:-"));
let ch=parseInt(prompt("please enter marks for chemistry:-"));
let b=parseInt(prompt("please enter marks for biology:-"));
let m=parseInt(prompt("please enter marks for mathematic:-"));  
let c=parseInt(prompt("please enter marks for computer:-"));
let tot=p+ch+b+m+c;
let per=tot/5
if (per>90){ 
    grade='A';
}
else if (per>80 && per<=90){  
    grade='B';
}   
else if (per>70 && per<=80){    
    grade='C';
}    
else if (per>60 && per<=70){    
    grade='D';
}    
else if (per>50 && per<=60){    
    grade='E';
}        
else if (per>40 && per<=50){    
    grade='F';
}        
else{
    grade="reappear";
}     
console.log("total marks:",tot);
console.log("percentage:",per);
console.log("grade:",grade);