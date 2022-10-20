/**
 * The product of triplet (P, Q, R),  A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N)
 * @param {Array<number>} A 
 * @returns {number} maximal product of any triplet
 */
function solution(A) {

    if(A.length < 3){
    	return 0;
    }
    var minINT = - 1000000;
    var maxINT = 1000000;

    var maxPlus = [minINT,minINT,minINT];
    var minPlus = [maxINT,maxINT];

    for (var i = A.length - 1; i >= 0; i--) {
    	var elem = A[i];
    	//maxPlus
    	if( elem > maxPlus[0] ){
    		var first = maxPlus[0];
    		var second = maxPlus[1];
    		maxPlus[0] = elem;
    		maxPlus[1] = first;
    		maxPlus[2] = second;

    	}else if( elem > maxPlus[1]){
    		var second = maxPlus[1];
    		maxPlus[1] = elem;
    		maxPlus[2] = second;

    	}else if( elem > maxPlus[2]){
    		maxPlus[2] = elem;

    	}


    	//minPlus
    	if(elem < minPlus[0]){
    		minPlus[1] = minPlus[0] ;
    		minPlus[0] = elem;

    	}else if(elem < minPlus[1]){
    		minPlus[1] = elem;
    	}
    	//console.log(maxPlus)
    	//console.log(minPlus)
    }

    var maxTot = maxPlus[0] * maxPlus[1] * maxPlus[2];
    var maxMin = minPlus[0] * minPlus[1] * maxPlus[0];

    return  maxTot > maxMin ? maxTot : maxMin;
}

//console.log(solution([1,2,3,10]));
console.log(solution([10, 10, 10]));