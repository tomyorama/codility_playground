/**
 *  
 * @param {*} N 
 * @param {*} A 
 * @returns 
 */
function solution(N, A) {

    var max = 0;
    if(N == 0){
    	return [];
    }
    var retCounters = new Array(N).fill(0);
    for (var i = 0; i <= A.length - 1; i++) {
    	var elem = A[i];

    	if(elem == (N + 1)){
    		//all
    		retCounters.fill(max);

    	}else if (elem <= N && elem > 0){
    		//incrise one
    		retCounters[elem-1] += 1;
    		if(retCounters[elem-1] > max){
    			max = retCounters[elem-1];
    		}

    	}
    }

    return retCounters;
}


//example funcs
function arrayMax(arr) {
  return arr.reduce(function (p, v) {
    return ( p > v ? p : v );
  });
}
function arrayMin(arr) {
  return arr.reduce(function (p, v) {
    return ( p < v ? p : v );
  });
}

console.log(solution(10,[1,2,2,2,4,5,6,11,10]));
console.log(solution(0,[1,2,2,2,4,5,6,11,10]));
console.log(solution(1,[1]));

