function solution(numbers) {
    const numList = numbers.sort((a,b)=> b-a)
    const [first, second] = numList
    
    return first * second
}