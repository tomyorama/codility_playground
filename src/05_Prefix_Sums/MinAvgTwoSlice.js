
/**
 * (P, Q), 0 ≤ P < Q < N, is slice of array A (min length is 2!)
 * 
 * @param {Array<number>} A array of N elements
 * @returns {number  } the starting position of the slice with the minimal average
 */
function solution(A) {
    if(A.length < 1){
    	return 0;
    }
    var currentobj = { minval:(A[0]+ A[1])/2, index:0 };
    var prefixSum = [0];
    for (var i = 0; i <= A.length-1; i++) {
    	var tmpSum = A[i] + prefixSum[i]; 
    	prefixSum[i+1] = tmpSum;
    	if( i>0 ){
    		for (var k = 1; k <= i; k++) {
    			var sumNext = (prefixSum[i+1] - prefixSum[k-1])/(i+2-k);
    			//console.log("from "+k + " to "+(i+1));
    			//console.log(sumNext);
    			if(sumNext < currentobj.minval){
    				currentobj = { minval:sumNext, index:k-1 };
    			}
    		}
    	}
    }

    return currentobj.index;
}

console.log(solution([4, 4, 3] ));