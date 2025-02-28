let a = [1,3,4,5,6,7,5,6,3,7]
let Duplicate=[]
for (let i = 0; i < a.length; i++) {
    for(let j = i+1; j< a.length; j++) 
        if (a[i]===a[j] ){
            Duplicate.push(a[i])
        }
    
}
console.log(Duplicate);
console.log(a);
