/**
 * 
 * @param {*} A 
 * @returns 
 */

function solution(A) {
    var N = A.length;
    if(N < 3){
        return 0;
    }
    var sumPeeks = [0];
	var peeks = [];
	for (var i = 1; i <= A.length - 2; i++) {
		var tmp1 = A[i - 1];
		var tmp2 = A[i];
		var tmp3 = A[i + 1];

		if (i == 1 && tmp2 < tmp1) {
			//peeks.push(0);
		} else if (i == A.length - 2 && tmp3 > tmp2) {
			//peeks.push(A.length - 1);
		}
		if (tmp1 < tmp2 && tmp2 > tmp3) {
			peeks.push(i);
            //
            sumPeeks[i] = sumPeeks[i-1] + 1;
		}else {
            sumPeeks[i] = sumPeeks[i-1];
        }
	}
    sumPeeks[N-1] = sumPeeks[N - 2];
	//console.log(peeks)
	var retVal = 1;
	var NumOfPeaks = peeks.length;
	if (NumOfPeaks == 0) {
		return 0;
	}
	if (NumOfPeaks == 1) {
		return 1;
	}
    var activeCut = 1;
	for (var f = 2; f <= N; f++) {
        var checkD = N/f;
        if(checkD%1){
            continue;
        }else{
            var step = N/f;
            var cutStart = 0;
            while(cutStart < N){
                var sumStart = 0;
                if(cutStart > 0){
                    sumStart = sumPeeks[cutStart - 1];
                }
                var sumOfPeeksTmp = sumPeeks[cutStart + step - 1] - sumStart;
                if(sumOfPeeksTmp < 1){
                    return  activeCut;
                }
                cutStart += step;
            }
            activeCut = f;
        }

	}
	return activeCut;


}
console.log(solution([1, 2, 1, 4, 5, 4]));