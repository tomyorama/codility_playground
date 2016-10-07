// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	// write your code in JavaScript (Node.js 4.0.0)
	var N = A.length;
	var K1 = [0];
	var K2 = [];

	K2[N - 1] = 0;

	for (var i = 1; i < N - 1; i++) {
		var tmp = A[i];
		var prev = K1[i - 1];
		K1[i] = Math.max(prev + tmp, 0);
	}
	for (i = N - 2; i > 0; i--) {
		K2[i] = Math.max(K2[i + 1] + A[i], 0);
	}

	var max = 0;

	for (i = 1; i < N - 1; i++) {
		max = Math.max(max, K1[i - 1] + K2[i + 1]);
	}

	return max;
}

console.log(solution([1, 2, 3]));