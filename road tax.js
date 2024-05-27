const prompt=require('prompt-sync')();
let costprice=parseInt(prompt("please enter the price of bike"));
if (costprice>100000){
    tax=costprice*15/100;
    console.log("the road tax is",tax);
}   
else if (costprice>=10000 && costprice<=100000){
    tax=costprice*10/100;
    console.log("the road tax is",tax);
}
else{
    console.log("tax free");
}