// Reverse a string
let name = "Developer"
let b=[]
for (let i = 0; i < name.length; i++) {
   b.push(name[i])     
}
// console.log(b);
let c = ''
for (let i = b.length-1; i >=0; i--) {
    c =c+b[i]
}
// console.log(c);


let str = "civic";
newStr="";
for (let i = 0; i < str.length; i++) {
    newStr =  str[i] + newStr
}
// console.log(newStr);



//palindrom

if (str === newStr) {
    console.log("Given number/word is Pelindrom");
} else{
    console.log("Not a Pelinfrom");
    
}




// reverse string

let a = "david"
let temp = " ";
for(let i= a.length-1; i>=0; i--){
    temp += a[i]
}
console.log(temp);
