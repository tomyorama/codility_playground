// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
	// write your code in JavaScript (Node.js 4.0.0)

	var q = [];
	for (var i = 0; i <= S.length - 1; i++) {
		var letter = S[i];
		if (letter == '(') {
			q.push(1);
		} else {
			if (q.length) {
				q.pop();
			}else{
				return 0;
			}
		}
	}
	return q.length > 0? 0 : 1;
}

console.log(solution("(()(())()))"));