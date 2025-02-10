let a = [10, 4,6,7,8,4,45,10]
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
        if (a[j]>a[j+1]) {
          [a[j],a[j+1]] = [a[j+1],a[j]] 
        }
   
    }
    
}
console.log(a);
let RepeatedArray = []
for (let i = 0; i < a.length; i++) {
      if (a[i]==a[i-1]) {
        RepeatedArray.push(a[i])
      }
}
console.log(RepeatedArray);
