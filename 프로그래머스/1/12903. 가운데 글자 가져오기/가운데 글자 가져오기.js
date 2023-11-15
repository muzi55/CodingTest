const solution = s => {
    const odd = [...s].find((el,i)=>i === Math.floor(s.length/2))
    const even = [...s].filter((el, i)=> i === Math.floor(s.length/2)||i === Math.floor(s.length/2)-1 ).join().replaceAll(',', '')
    return s.length%2===0? even : odd
}