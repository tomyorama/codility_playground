// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	// write your code in JavaScript (Node.js 4.0.0)

	for (var i = 0; i <= A.length - 3; i++) {
		for (var k = i + 1; k <= A.length - 2; k++) {
			for (var j = k + 1; j <= A.length - 1; j++) {
				var P = A[j];
				var Q = A[k];
				var R = A[i];
				if (((P + Q) > R) && ((Q + R) > P) && ((R + P) > Q)) {
					return 1;
				}
			}
		}
	}
	return 0;
}


console.log(solution([10, 2, 5, 1, 8, 20]));