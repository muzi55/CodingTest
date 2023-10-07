function solution(str, n) {
    let answer = '';
    [...str].forEach(el=>{
        answer += el.repeat(n)
    })
    return answer
}