
/**
 * 
 * @param {Array<number>} A 
 * @returns number that is not paired with all others(only one can be!)
 */
function solution(A) {
    var result = 0;
    for (var i = A.length - 1; i >= 0; i--) {
    	result = A[i] ^ result;
    }
    return result;
}

console.log(solution([9,8,7,9,7,8,6]));