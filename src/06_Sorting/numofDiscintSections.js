


function solution(A) {

	//A = A.filter(x=>x!==0);
	var N =  A.length;
	
	var arrayActive = [];
	var arrayDeactive = [];

	for (var i = 0; i < N; i++) {
		var elem = A[i];
		arrayDeactive.push(i + elem);
		arrayActive.push(i - elem);
		
	}

	arrayActive = arrayActive.sort();
	arrayDeactive = arrayDeactive.sort();
	var activeIndex = 0;
	var deactiveIndex = 0;
	var currentActive = 0;
	var total = 0;
	for (var j = 0; j < N; j++) {
		while(activeIndex < N && arrayActive[activeIndex] <= arrayDeactive[deactiveIndex]){
			activeIndex++;
			currentActive++;
		}
		currentActive--;
		total += currentActive;
		deactiveIndex++;
		if (total > 10000000){
            return -1;
    	}
	 }

	return total;
}
// function solutionA(A) {
// 	// write your code in JavaScript (Node.js 4.0.0)

// 	var count = 0;
// 	for (var i = 0; i <= A.length - 2; i++) {
// 		var discRadius = A[i];
// 		for (var j = i + 1; j <= A.length - 1; j++) {
// 			var discRadiusNext = A[j];
// 			if ((i + discRadius) >= (j - discRadiusNext)) {
// 				count++;
// 			}
// 		}
// 	}
// 	return count;
// }

//console.log(solution([1, 5, 2, 1, 4, 0 ]));
console.log(solution([1, 5, 8, 7, 8, 4, 8, 5, 0, 5]));