function solution(my_string, is_prefix) {
    // return my_string.includes(is_prefix) && [...my_string][0] === [...is_prefix][0] ? 1 : 0
    return my_string.startsWith(is_prefix)? 1 : 0
    
}