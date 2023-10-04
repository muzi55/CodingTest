const solution = (s) => {
    const NumberArray = s.split(' ').map(Number)
    return `${Math.min(...NumberArray)} ${Math.max(...NumberArray)}`
}