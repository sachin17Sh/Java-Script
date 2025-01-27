const inputElement = document.querySelector('input')
const debounce = (func, wait)=>{
    let timerID
        return (...args) =>{
            clearTimeout(timerID)
             timerID = setTimeout(()=> func(...args), wait)
        }
}

const callApi=(e)=>{
    console.log('Calling API:',e.target.value);  
}

const debouncedApi = debounce(callApi, 2000)

inputElement.addEventListener('input', debouncedApi)