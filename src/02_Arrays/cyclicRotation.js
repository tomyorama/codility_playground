// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
	for (var i = 0; i < K; i++) {
		A.unshift(A.pop());
	}
	return A;
	// write your code in JavaScript (Node.js 4.0.0)
}
var x = [1,2,3,4];
console.log(solution(x,2));
//console.log(x);