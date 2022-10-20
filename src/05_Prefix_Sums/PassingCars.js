
/**
 *  Passing Cars
 * @param {Array<number>} A  array with values: 0 - east, 1 - west
 * @returns {number} count of pairs (west,east)
 */
function solution(A) {
    var countZeros = 0;
    var countOnes = 0;
    var counter = 0;
    for (var i = 0; i <= A.length - 1; i++) {
    	var elem = A[i];
    	if (elem === 0){
    		countZeros++;

    	}else if(elem === 1){
    		countOnes++;
    		counter += countZeros;
    	}
    	if(counter>1000000000){
    		return -1;
    	}
    }
    return counter;
}

console.log(solution([0, 1, 0, 1, 1] ));