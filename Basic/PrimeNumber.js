let a = 16;
if (a <= 1) {
    console.log("Not a Prime Number");
} else {
    let isPrime = true;
    for (let i = 2; i <= a; i++) {
        if (a % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log("Given Number is a Prime Number");
    } else {
        console.log("Given Number is not a Prime Number");
    }


}