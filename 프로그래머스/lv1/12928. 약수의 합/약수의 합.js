const solution= n => {
    let answer = 0
    for(let i =0; i < n+1 ; i++){
        if(n%i === 0 ) answer += i 
    }
    return answer
}