// Largest number
let arr = [2,45,48,3456,3,3444,67]
let n = arr.length
for (let i = 0; i < n-1; i++) {
    for (let j = 0; j < n-1-i; j++) {
      if(arr[j] > arr[j+1]){
         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
}

console.log(arr);

let largestNumber = arr[arr.length-1]
console.log(largestNumber);


