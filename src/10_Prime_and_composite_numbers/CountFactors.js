/**
 * D is a factor of a N if  M ; N = D * M
 * @param {number} N 
 * @returns number of factors of N
 */
function solution(N) {

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