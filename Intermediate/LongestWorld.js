// this will show the string length

let a = "My name is XYZ person and I am solving the problems to improve my logic building";
let longest =  '';
let c = a.split(' ');
// console.log(c);
for (let i = 0; i < c.length; i++) {
    if (c[i].length>longest) {
         longest = c[i].length
    }  
}
// console.log(longest);


//this will show the word

let str = "A quick browny fox"
let myval = ''
let bigval = str.split(' ')
console.log(bigval);

for (let i = 0; i < bigval.length; i++) {
    if (bigval[i].length > myval.length) {
        myval = bigval[i]
    }
    
}
console.log(myval);
