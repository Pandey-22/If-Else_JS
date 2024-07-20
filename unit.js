const prompt=require('prompt-sync')();
let unit=parseInt(prompt("please enter your unit:-"));
cost=unit*100;
if (cost>100){
    discount=10;
    total_cost=cost-discount;
    console.log("Total Cost=",total_cost);
}
else{
    console.log("Cost=",cost);
}