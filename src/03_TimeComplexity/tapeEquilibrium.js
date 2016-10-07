// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    if(A.length == 1){
    	return A[0];
    }else if (A.length == 0){
    	return 0;
    }
    var minimum = 100000;
    // var sums = new Array(A.length-1);
    // for (var i = 0; i < Math.ceil(A.length/2); i++) {
    // 	var top = A[i];
    // 	var last = A[A.length - 1 - i];
    // 	sums[i] = sums[i - 1] + 
    // }
    var sum = ( acc, cur ) => acc + cur;

    var sumTotal = A.reduce(sum,0);
    console.log("sumTotal "+ sumTotal)
    var leftSum = 0;
    for (var i = 0; i <= A.length - 1; i++) {
    	leftSum += A[i];
    	var rightSum = sumTotal - leftSum;
    	var diff = Math.abs(leftSum - rightSum);
    	if(diff < minimum) {
    		minimum = diff;
    	}
    	
    }
    return minimum;
}

console.log(solution([3, 1, 2, 4, 3]));
console.log(solution([]));