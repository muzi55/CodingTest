const solution = (s1, s2) => {
    let answer = 0;
    
    const a = s2.forEach(el=>{
        answer += s1.filter(item=> item === el).length
    })
    
    return answer
}