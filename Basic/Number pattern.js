//1st number pattern

let a = 5
for (let i = 0; i <= a; i++) {
    let pat = ''
    // console.log(i);
      for (let j = 1; j <= i; j++) {
        pat += j
      }
      console.log(pat);
}

//2nd number pattern

let b = 5
for (let i = 0; i <= b; i++) {
    let sat = ''
      for (let j = 1; j <= i; j++) {
        sat += i
      }
      console.log(sat);
}


// 3rd number
let num = 5;
for(let i = 0; i<=num; i++){
    let print = '' 
    for (let j = 0; j <i; j++) {
        print += i-j
    }
    console.log(print);
    
}
