
//Armstong number 

let num = 153;
let val=num;
let sum = 0;
while(num>0){
    let temp = num%10;   
    sum += temp*temp*temp;
    num = parseInt(num/10)
} 
console.log(sum);
if(sum==val){
    console.log("Given is Armstrong number"); 
}else{
    console.log("Not an Armstrong number")
}

    