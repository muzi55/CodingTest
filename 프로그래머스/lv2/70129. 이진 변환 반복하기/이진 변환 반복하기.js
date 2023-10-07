function solution(s) {
    let 반복횟수 = 0;
    let 제거횟수 = 0;
    let 이진변환 = s;
    
    while(이진변환.length !== 1){
        반복횟수 += 1;
        let 이진수글자수 = 이진변환.length;
        const 필터 = [...이진변환].filter(el=>el !== '0').join('');
        제거횟수 += 이진수글자수 - 필터.length
        이진변환 = 필터.length.toString(2)

    }
    return [반복횟수, 제거횟수]
}