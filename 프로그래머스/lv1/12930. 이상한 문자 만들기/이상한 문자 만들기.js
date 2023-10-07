function solution(s) {
  let answer = '';
  const arr = s.split(' ');
  
    return arr.map(el=>{
        return [...el].map((item,index)=> {
            return index%2===0 ? item.toUpperCase() : item.toLowerCase()
            
        }).join('')
    }).join(' ')
    
    
    
    
  // arr.forEach(el => {
  //   [...el].forEach((string, index) => {
  //     index % 2 === 0 ? answer += string.toUpperCase() : answer += string.toLowerCase();
  //   });
  //   answer += ' ';
  // });

  
}