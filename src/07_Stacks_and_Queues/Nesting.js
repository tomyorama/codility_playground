/**
 * Check if string is properly nested e.g. "(()(())())" ok, "())" not ok
 * @param {*} S 
 * @returns 
 */
function solution(S) {
	var q = [];
	for (var i = 0; i <= S.length - 1; i++) {
		var letter = S[i];
		if (letter == '(') {
			q.push(1);
		} else {
			if (q.length) {
				q.pop();
			} else {
				return 0;
			}
		}
	}
	return q.length > 0 ? 0 : 1;
}

console.log(solution("(()(())()))"));