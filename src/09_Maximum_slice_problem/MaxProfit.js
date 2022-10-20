/**
 * 
 * @param {Array<number>} A array of daily prices of a stock index is day
 * @returns max profit slice buy/sell day
 */
function solution(A) {

    if(A.length === 1 || A.length === 0){
        return 0;
    }

    var maxSoFar = 0;
    var minTmp = A[0] < A[1] ? A[0]: A[1];

    for (var i = 2; i <= A.length - 1; i++) {
    	var tmp = A[i];
    	if(tmp < minTmp){
    		minTmp = tmp;
    	}else{
    		maxSoFar = Math.max(tmp - minTmp, maxSoFar);
    	}
    }

    return maxSoFar;
}

console.log(solution([23171, 21011, 21123, 21366, 21013, 21367] ));