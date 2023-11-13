const solution = arr => {
    const minNumber = Math.min(...arr)
    if(arr.length === 1) return [-1]
    
    return arr.filter(el=>{
        if(el !== minNumber) return el
    })
    
}