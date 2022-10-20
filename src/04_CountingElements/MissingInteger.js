
/**
 * 
 * @param {Array<number>} A 
 * @returns 
 */
function solution(A) {

		var totalNum = A.length; 
		var array = new Array(totalNum);

		for (var i = A.length - 1; i >= 0; i--) {
			var element = A[i];
			if(element <= totalNum && element > 0 ){
				array[element - 1] = 1;
			}
		}
		for (var j = 0; j <= array.length - 1; j++) {
			if(array[j] !== 1){
				return j+1;
			}
		}
		return totalNum + 1;
}

console.log(solution([-1,-2,0,1,2,3,4,5,7,8,6,-10]));
//console.log(solution([10]));
//console.log(solution([1,2,4,3,5,7,8]));
//console.log(solution([1,2,4,3,6,7,9,5]));

console.log(solution(buildBigArray()));

function buildBigArray(){
	var array = new Array(1000);

	for (var i = array.length - 1; i >= 0; i--) {
		var randomNum = Math.ceil(Math.random()*10);
		array[i] = randomNum;
	}
	return array;
}