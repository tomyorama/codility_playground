

/**
 * Get unique number of items in A
 * @param {Array<number>} A 
 * @returns {number} number of unique numbers
 */
function solution(A) {

	//return A.getUnique().length;
	//return A.filter( onlyUnique ).length;
	if(A.length < 1){
		return 0;
	}else if(A.length == 1){
		return 1;

	}
	A.sort();
	var last = A[A.length-1];
	var dinstinctCounter = 1;
	for (var i = A.length - 2; i >= 0; i--) {
		var elem = A[i];
		if (elem === last){
			continue;
		}else{
			dinstinctCounter++;
		}
		last = elem;
	}
	return dinstinctCounter;
}

Array.prototype.getUnique = function() {
	var u = {},
		a = [];
	for (var i = 0, l = this.length; i < l; ++i) {
		if (u.hasOwnProperty(this[i])) {
			continue;
		}
		a.push(this[i]);
		u[this[i]] = 1;
	}
	return a;
}

function onlyUnique(value, index, self) {
	return self.indexOf(value) === index;
}


console.log(solution([1, 1,2,2,4,5,1]));