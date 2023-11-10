const solution = (phone_number) => [...phone_number].map((el, index) => phone_number.length - 4 > index ? "*" : el).join().replaceAll(",", "")




// const solution = (phone_number) => {
//     let answer = '';
//     [...phone_number].forEach((el,index)=>{
//         const numLength = phone_number.length
//         numLength - index > 4 ? answer += '*' : answer += el
//     })
//     return answer
// }