const prompt=require('prompt-sync')()
let basic_salary=parseInt(prompt("please enter your basics salary:-"));
if (basic_salary<=10000){
    HRA=(basic_salary*20)/100
    DR=(basic_salary*80)/100
    Gross_Salary=basic_salary+HRA+DR;
    console.log(Gross_Salary);
}
else if (basic_salary>10000 && basic_salary<=20000){
    HRA=(basic_salary*25)/100
    DR=(basic_salary*90)/100
    Gross_Salary=basic_salary+HRA+DR;
    console.log(Gross_Salary);
}
else{
    HRA=(basic_salary*30)/100
    DR=(basic_salary*95)/100
    Gross_Salary=basic_salary+HRA+DR;
    console.log(Gross_Salary);
}