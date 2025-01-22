let name = 'A QUick BrOwn fox';
let count = 0;
let vowels = ["a","e","i", "o","u", "A", "E", "I", "O","U"]
for (let i = 0; i < name.length; i++) {
   if (vowels.includes(name[i])) {
        count++
   }
}
console.log(count);
