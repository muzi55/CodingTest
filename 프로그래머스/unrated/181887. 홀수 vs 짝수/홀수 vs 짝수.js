function solution(arr) {
    const oddArr = [];
    const evenArr = [];
    
    arr.forEach((el, index)=>{
        index%2===0? oddArr.push(el) : evenArr.push(el)
    })
    
    const sumOdd = oddArr.reduce((acc,current)=> acc +current, 0)
    const sumEven = evenArr.reduce((acc,current)=> acc +current, 0)
    
    return sumOdd > sumEven ? sumOdd : sumEven
}