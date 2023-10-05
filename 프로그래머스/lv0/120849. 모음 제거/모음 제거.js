function solution(str) {
    return [...str].map(el => {
        if(el === 'a') return ''
        if(el === 'e') return ''
        if(el === 'i') return ''
        if(el === 'o') return ''
        if(el === 'u') return ''
        return el
    }).join().replaceAll(',', '')
}