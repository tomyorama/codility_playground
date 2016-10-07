// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	// write your code in JavaScript (Node.js 4.0.0)

	// write your code in JavaScript (Node.js 4.0.0)
	var maxEndingHere = A[0];
	var maxSoFar = A[0];
	for (var i = 1; i < A.length; i++) {
		maxEndingHere = Math.max(A[i], maxEndingHere + A[i]);
		maxSoFar = Math.max(maxSoFar, maxEndingHere);
	}
	return maxSoFar;
}

console.log(solution([1, 2, 3]));