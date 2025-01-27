//Anagram Check
// Determine if two strings are anagrams of each other.
let a = "listen"
let b = "silent"
let First = a.split('')
let Second = a.split('')

for (let i = 0; i < First.length; i++) {
    for (let j = 0; j < First.length; j++) {
        if(First[j]>First[j+1]){
            let temp = First[j]
            First[j]= First[j+1]
            First[j+1]= temp
            // console.log(temp);
        }        
    }
    
}
console.log(First);

for (let i = 0; i < Second.length; i++) {
  for (let j = 0; j < Second.length; j++) {
    if (Second[j]>Second[j+1]) {
        let num = Second[j]
        Second[j] = Second[j+1]
        Second[j+1] = num
    }  
  }   
}
console.log(Second);


if (First.join(' ')==Second.join(' ')) {
    console.log("Given is a Anagram")
} else{
    console.log("Not a Anagram"); 
}



// Alternate
let name1 = "testuser"
let name2 = "username"

let c = name1.split('').sort().join(' ')
let d = name2.split('').sort().join(' ')

console.log(c);
console.log(d);

if(c==d){
    console.log("Given is a Anagram") 
} else{
    console.log("Not a Anagram"); 
}
