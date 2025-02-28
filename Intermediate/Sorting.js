// sort an array
 let a = [56,4,5,65,34,56,88]
  a.sort((a,b)=> a-b)
    // console.log(a);


// Bubble Sort 
//ascending order
let arr = [56,4,5,65,34,56,88]
for (let i = 0; i < arr.length-1; i++) {
    for (let j = 0; j < arr.length-1-i; j++) {
        if (arr[j]>arr[j+1]) {
            [arr[j],arr[j+1]] = [arr[j+1], arr[j]]
        } 
    }  
}

console.log(arr);

// Descending order
let arry = [56,4,5,65,34,56,88]
for (let i = 0; i < arry.length-1; i++) {
    for (let j = 0; j < arry.length-1-i; j++) {
        if (arry[j]<arry[j+1]) {
            [arry[j],arry[j+1]] = [arry[j+1], arry[j]]
        } 
    }  
}
console.log(arry);



