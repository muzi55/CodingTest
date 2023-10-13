function solution(str) {
    const 대문자_정규식 = /[A-Z]/;
    
    return [...str].map(el=>el.match(대문자_정규식) ? el.toLowerCase() : el.toUpperCase()).join('')
}