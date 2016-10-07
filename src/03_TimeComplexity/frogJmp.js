// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 4.0.0)

    if(X >= Y){
    	return 0;
    }

    return Math.ceil((Y - X)/D);
}

console.log(solution(10,20,1));