function solution(t, p) {
    let answer = 0;
    const a = [...t].filter((el, index)=>{
        if(t.length - p.length >= index){
            const b = t.slice(index, p.length + index) <= p && answer++
            
        }
        // t.slise(index, p.length)
    })
    return answer

}