// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
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