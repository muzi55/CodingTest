function solution(participant, completion) {
    const 완주 = completion.sort()
    const 참가자 = participant.sort()
    
    for(let i = 0; i < 참가자.length; i++){
        if(완주[i] !== 참가자[i]) return 참가자[i]
    }
 
}