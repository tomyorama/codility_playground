/**
 * A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N
 * A[P] + A[Q] > A[R]
 * A[Q] + A[R] > A[P]
 * A[R] + A[P] > A[Q]
 * @param {*} A 
 * @returns 1 if there exists a triangular triplet(rules apply)
 */
function solution(A) {

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