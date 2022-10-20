/**
 * Returns max Slice of array
 * @param {Array<number>} A 
 * @returns 
 */
function solution(A) {
	var maxEndingHere = A[0];
	var maxSoFar = A[0];
	for (var i = 1; i < A.length; i++) {
		maxEndingHere = Math.max(A[i], maxEndingHere + A[i]);
		maxSoFar = Math.max(maxSoFar, maxEndingHere);
	}
	return maxSoFar;
}

console.log(solution([1, 2, 3]));