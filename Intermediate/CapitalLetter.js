let a = "testusername"
let b = ""

for(let i=0; i<a.length; i++){
    b = a[i] + b
}

//console.log(b)

let c = b.split('')
for (let i = 0; i < c.length; i++) {
  if ((i+1)%3 === 0) {
   c[i]= c[i].toUpperCase()
  }
    
}
let d = c.join('')
console.log(d)