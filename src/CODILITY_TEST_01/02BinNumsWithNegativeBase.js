
/// BRUTE FORCE SOLUTION!!
function solutionBF(A) {
	// write your code in JavaScript (Node.js 4.0.0)
	var num = getNumber(A);

	console.log("Number " + (num));
	console.log("Bin ");
	console.log(A);

	var maxLog = Math.ceil(Math.log2(Math.abs(num))) + 3;
	var searchNum = -num;

	//return;
	var combs = generateCombs([1, 0], maxLog, [
		[]
	]);

	//console.log(permutation);

	for (var i = combs.length - 1; i >= 0; i--) {
		var comb = combs[i];

		if (getNumber(comb) == searchNum) {

			console.log("Number " + (-num));
			console.log("Bin ");
			console.log(comb);

			return comb;
		}
	}
}




function getNumber(A) {

	var NUMber = 0;

	for (var i = 0; i <= A.length - 1; i++) {
		var tmpNN = A[i];
		var tmpPow = tmpNN * Math.pow(-2, i);
		NUMber += tmpPow

	}

	return NUMber;

}

function generateCombs(ELEMS, L, RetVAls) {

	RetVAls = RetVAls || [[]];
	if (L < 1) {
		return RetVAls;
	} else {
		var retVal = [];

		for (var i = 0; i <= RetVAls.length - 1; i++) {
			var val = RetVAls[i];
			for (var j = 0; j <= ELEMS.length - 1; j++) {
				var elem = ELEMS[j];

				var newElem = JSON.parse(JSON.stringify(val));
				newElem.push(elem);
				retVal.push(newElem);
			}
		}
		return generateCombs(ELEMS, L - 1, retVal);

	}

}

function generatePerms(ELEMS, RetVAls) {


	RetVAls = RetVAls || [[]];
	if (ELEMS.length === 0) {
		return RetVAls;
	} else {
		var retVal = []
		for (var i = 0; i <= RetVAls.length - 1; i++) {
			var val = RetVAls[i];
			for (var j = 0; j <= ELEMS.length - 1; j++) {
				var elem = ELEMS[j];
				var newElem = JSON.parse(JSON.stringify(val));
				var newElemArray = JSON.parse(JSON.stringify(ELEMS));
				newElem.push(elem);
				newElemArray.splice(j, 1);

				retVal = retVal.concat(generatePerms(newElemArray, [newElem]));
			}
		}
		return retVal;

	}

}

function tests() {
	var combs = generateCombs([0, 1], 3);
	var permutation = generatePerms([0, 1, 2, 3]);
	console.log(permutation);
}

///
////
////
////
///
//Solution
function solution(A) {
	var N = A.length;

	//get Number
	var num = 0;
	for (var i = 0; i < N; i++) {
		num += A[i] * Math.pow(-2, i);
	}
	num = -num;
	console.log("num:" + num);
	var retVal = [];
	while (num != 0) {
		if (num === -1) {
			retVal.push(1);
			retVal.push(1);
			break;
		} else if (num === 1) {
			retVal.push(1);
			break;
		}
		var remainder = num % (-2);
		remainder = remainder === 0 ? 0 : remainder;//fix for -0
		num = float2int(num / (-2));
		if (remainder < 0) {
			num += 1;
			remainder += 2;
		}
		retVal.push(remainder);
	}
	return retVal;
}

function float2int (value) {
    return value | 0;
}



//test cases
//console.log(solution([1, 1, 0, 1]));
//console.log(solution([1,0,0,1,1]));

console.log(solution([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])); 
//console.log(solution([ 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1 ]));

//tests();