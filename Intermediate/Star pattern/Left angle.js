let n = 10;
for (let i = 1; i <=n; i++) {
    let str = "";
    for (let j = 1; j <=n-i; j++) {
      str +=" "
    }
    for (let k = 0; k <i; k++) {
        str += "*"  
    }
    console.log(str);
    
}