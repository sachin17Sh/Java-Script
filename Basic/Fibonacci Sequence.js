//fibonacci 
let number = 15; 
let n1 = 0;
let n2 = 1;
console.log(n1); 
console.log(n2); 

for (let i = 2; i <= number; i++) {  
    let num = n1 + n2;
    console.log(num); 
    n1 = n2;  
    n2 = num;
}