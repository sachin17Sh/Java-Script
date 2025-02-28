const btnIncrease = document.querySelector('.btn-increment')
const btnPressed = document.querySelector('.btn-pressed')
const btnTriggered = document.querySelector('.btn-triggered')

let pressCount= 0
let pressTrigger = 0

const  debounced=(callback, time)=>{
    let timeOut
    return function(...args){
        clearTimeout(timeOut)
        timeOut = setTimeout(() => {
            callback(...args)
        }, time);
    }
}

const deBouncedDount = debounced(()=>{
    pressTrigger += 1
    btnTriggered.innerHTML= pressTrigger
}, 800)

btnIncrease.addEventListener('click', ()=>{
    btnPressed.innerHTML = ++pressCount;
    deBouncedDount();
})