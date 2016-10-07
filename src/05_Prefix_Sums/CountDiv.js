// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 4.0.0)

    if(A == B){
    	return A % K ? 0 : 1;
    }
    var first = A + (K-(A%K));
    var isfirst=0;
    if(A%K === 0){
    	first = A;
    }
    var diff = B - first;
    if(diff>0){
    	return Math.floor(diff/K) + 1;
    }else{
    	return 0;
    }

    //OK solution
    // var counter = 0;
    // var step = A;
    // while(step<=B){
    // 	if(step%K === 0){
    // 		counter++;

    // 		step += K;
    // 	}else{
    // 		step++;
    // 	}
    // }
    // return counter;
}

console.log(solution(10,20,7));
console.log(solution(6, 11, 2));