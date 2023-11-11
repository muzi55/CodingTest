function solution(num) {
    let answer = 0;
    let number = num;
    
    for(let i = 0; i < 500; i++){
        if(number === 1) return answer = i
        if(number%2===0){
            number = number/2;
        }else if(number%2!==0){
            number = (number*3)+1
        }
        if(i === 499){
            return answer = -1
        }
    }
    return answer
}