function solution(left, right) {
    let answer = 0;
    let arr = [];
    for(let i = left; i <= right; i++){   
        arr=[];
        for(let j=0; j <= right ; j++){
              if(i%j===0) arr.push(j)
        }
        arr.length%2===0 ? answer+=i : answer-=i
    }
    return answer
}