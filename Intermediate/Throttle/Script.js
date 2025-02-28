const btnIncrease = document.querySelector('.btn-increment')
const btnPressed = document.querySelector('.btn-pressed')
const btnTriggered = document.querySelector('.btn-triggered')

let pressCount= 0
let pressTrigger = 0

const  myThrottle=(callback, time)=>{
    let lastTime = 0
    return function(...args){
        let now = new Date().getTime()
        if (now-lastTime < time) return;
        lastTime = now
        return callback(...args)
            
    }
}

const throttleCount = myThrottle(()=>{
    pressTrigger += 1
    btnTriggered.innerHTML= pressTrigger
}, 800)

btnIncrease.addEventListener('click', ()=>{
    btnPressed.innerHTML = ++pressCount;
    throttleCount();
})