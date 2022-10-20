
/**
 * 
 * @param {Array<number>} A range [1..(N + 1)] array of N elements
 * @returns {numner} missing element
 */
function solution(A) {
    if(!A || !(A.length)){
    	return 1;
    }
    var n = A.length + 1;
    var totalSum = n*(n+1)/2;
   	var sum = ( acc, cur ) => acc + cur;

    var sumA = A.reduce(sum,0);
    return totalSum - sumA;
}

console.log(solution([1,2,4,5,3]));
console.log(solution([]));
console.log(solution());