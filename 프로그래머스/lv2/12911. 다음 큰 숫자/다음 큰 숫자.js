function solution(n) {
    let answer = 0;
    const 이진법 = n.toString(2)
    const 일의갯수 = [...이진법].filter(el=>el!=='0').length
    
    for (let i = n+1; i < 1_000_000; i++){
       if(i < n) continue;
       const 다음큰수 = i.toString(2)
       const 다음큰수일의갯수 = [...다음큰수].filter(el=>el!=='0').length
       
       if(다음큰수일의갯수 === 일의갯수)return answer = i
    
    }
    return answer
}

// n 의 다음큰 숫자는 n 보다 커야한다.

// n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같다.

// n의 다음 큰 숫자 조건 1,2 를 만족하는 수 중 가장 작은 수 입니다.
