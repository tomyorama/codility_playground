// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	// write your code in JavaScript (Node.js 4.0.0)
	if(A.length == 0 ){
		return 0;

	}else if(A.length == 1){
		return 0;
	}
	var leader = A[0];
	var cl = 1;
	for (var i = A.length - 1; i >= 0; i--) {
		var elem = A[i];
		if (elem == leader) {
			cl++;

		} else {
			cl--;

		}
		if (cl === 0) {
			leader = A[i];
			cl = 1;
		}
	}

	var coutLeader = (acc, x) => {
		if (x === leader) {
			return acc + 1;
		} else {
			return acc;
		}
	};
	var countleader = A.reduce(coutLeader, 0);
	var isLeader = countleader > Math.floor(A.length / 2);

	var retVal = 0;
	var tmpLeader = 0;
	if (isLeader) {
		for (var j = 0; j <= A.length - 1; j++) {
			var elemTmp = A[j];
			if (elemTmp === leader) {
				tmpLeader++;
			}
			if(tmpLeader > Math.floor((j+1)/2) 
				&& (countleader - tmpLeader) > Math.floor((A.length - (j + 1))/2)){
				retVal++;
			}


		}
		return retVal;
	} else {
		return 0;
	}

}

console.log(solution([1, 1, 2, 2, 2, 2, 2, 2, 1, 1]));