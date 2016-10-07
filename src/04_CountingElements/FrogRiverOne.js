// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 4.0.0)

    var poss = new Array(X);
    var totalNum = X*(X+1)/2;
    var tmpSum = 0;
    for (var i = 0; i <= A.length - 1; i++) {
    	var elem = A[i];
    	if(poss[elem] == 1){
    		continue;
    	}else if (elem <= X){
    		tmpSum += elem;
    		poss[elem] = 1;
    		if(tmpSum == totalNum){
    			return i;

    		}

    	}
    }
    return -1;
}

console.log(solution(5,[1,2,4,4,5,4,5,4,4]));