// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 4.0.0)

    if(N == 1){
        return 1;
    }
    if(N == 2){
        return 2;
    }
    var count = 2
    for (var i = 2; i <= Math.floor(Math.sqrt(N)); i++) {
        var divide = N/i;
        if(divide%1){
            continue;
        }else{
            if(divide != i){
                count+=2;
            }else{
                count+=1;
            }
            
        }
        
    }
    return  count;
}

console.log(solution(4));