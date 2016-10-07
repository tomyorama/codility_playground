// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)

    if(!A || !(A.length)){
    	return 1;
    }
    var n = A.length + 1;
    var totalSum = n*(n+1)/2;
   	var sum = ( acc, cur ) => acc + cur;

    var sumA = A.reduce(sum,0);
    return totalSum - sumA;
}

console.log(solution([1,2,4,5,3]));
console.log(solution([]));
console.log(solution());