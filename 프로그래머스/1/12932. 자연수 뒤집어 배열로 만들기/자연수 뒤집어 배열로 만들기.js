function solution(n) {
    return [...n.toString()].map(el=>+el).reverse()

}

//     let answer = [];
//     [...String(n)].forEach(el=>answer.unshift(Number(el)))
//     return answer

// 배열로 만든후 => forEach
// forEach 돌린값을 unshift로 앞에서부터 추가 [1], [2,1], [3,2,1], [4,3,2,1], [5,4,3,2,1]