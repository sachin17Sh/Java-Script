const a = [1,3,5]
a[5] = 6
// console.log(a.length);



// Question => const [b] = [10,20,30,40,50]  access the value of 40
const [, , , b] = [10,20,30,40,50]
// console.log(b)
//alternate
const {3: c} = [10,20,30,40,50]
// console.log(c)




function abc(){
    console.log("hii")
}
const value = new abc()
// console.log(value)

function xyz(name){
    const obj = { name }
    return obj
}
const newname = xyz("Test")
console.log(newname)


