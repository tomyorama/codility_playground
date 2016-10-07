// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var result = 0;
    for (var i = A.length - 1; i >= 0; i--) {
    	result = A[i] ^ result;
    }
    return result;
}

console.log(solution([9,8,7,9,7,8,6]));