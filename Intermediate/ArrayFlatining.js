let a = [[1,4,53,6], [34,43,21,5], [45,87,9]]

// let b = a.flat()
// console.log(b);

let flatarray = []
for (let i = 0; i < a.length; i++) {
    const current = a[i];
    // console.log(a[i]);  
    for (let j = 0; j < current.length; j++) {
        flatarray.push(current[j]) 
        // console.log(current[j]);   
    }
}
console.log(flatarray);
