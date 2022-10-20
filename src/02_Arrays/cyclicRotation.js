
/**
 *  Rotate array k times
 * @param {Array<any>} A 
 * @param {number} K 
 * @returns {Array<any>}  The array A rotated K times
 */
function solution(A, K) {
	for (var i = 0; i < K; i++) {
		A.unshift(A.pop());
	}
	return A;
}
var x = [1,2,3,4];
console.log(solution(x,2));