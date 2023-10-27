const solution = s =>{
    // 구한 값이 null(없는 값이라면?) => 0
    const pLength = s.match(/[p]/gi)?.length ?? 0
    const yLength = s.match(/[y]/gi)?.length ?? 0
    return pLength === yLength? true: false
}