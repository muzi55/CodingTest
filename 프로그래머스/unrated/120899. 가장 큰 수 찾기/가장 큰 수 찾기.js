function solution(array) {
    const 가장큰수 = Math.max(...array)
    return [가장큰수, array.indexOf(가장큰수)]
}