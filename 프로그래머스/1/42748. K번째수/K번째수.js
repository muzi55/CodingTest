function solution(array, commands) {
    var answer = [];
    commands.forEach(el=>{
        const [i, j, k] = el
        const a = array.slice(i-1, j).sort((a,b)=>a-b)
        answer.push(a[k-1])
    })
    return answer;
}
