const solution = (angle) => {
    const 예각 = angle > 0 && angle < 90;
    const 직각 = angle === 90
    const 둔각 = angle > 90 && angle < 180;
    const 평각 = angle === 180;
    
    
    if(angle = 예각) return 1
    if(angle = 직각) return 2
    if(angle = 둔각) return 3
    if(angle = 평각) return 4
}