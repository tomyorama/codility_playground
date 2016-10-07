// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)

    var counts = new Array(A.length);

    for (var i = A.length - 1; i >= 0; i--) {
    	var elem = A[i] - 1;
    	var count = counts[elem];
    	if(!count){
    		counts[elem] = 1;
    	}else {
    		return 0;
    	}
    }
    for (var j = counts.length - 1; j >= 0; j--) {
    	if (counts[j] != 1){
    		return 0;
    	}
    }
    return 1;


}

console.log(solution([1,3,2,6,4,5,7]));