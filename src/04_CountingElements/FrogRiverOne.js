
/**
 * Return Time K (index of A) when there are all elements 1...X are appeared in Array
 * @param {number} X number of steps
 * @param {Array<number>} A array of leafs , index K is time elapsed
 * @returns {number} K time position 
 */
function solution(X, A) {

	var poss = new Array(X);
	var totalNum = X * (X + 1) / 2;
	var tmpSum = 0;
	for (var i = 0; i <= A.length - 1; i++) {
		var elem = A[i];
		if (poss[elem] == 1) {
			continue;
		} else if (elem <= X) {
			tmpSum += elem;
			poss[elem] = 1;
			if (tmpSum == totalNum) {
				return i;

			}

		}
	}
	return -1;
}

console.log(solution(5, [1, 2, 4, 4, 5, 4, 5, 4, 4]));