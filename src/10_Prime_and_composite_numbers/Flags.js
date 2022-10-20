/**
 * 
 * @param {*} A 
 * @returns 
 */
function solution(A) {
    if (A.length < 1) {
        return 0;
    }

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
        }

    }
    //console.log(peeks)
    var retVal = 1;
    var NumOfFlags = peeks.length;
    if (peeks.length == 0) {
        return 0;
    }
    if (peeks.length == 1) {
        return 1;
    }
    for (var f = NumOfFlags; f >= 1; f--) {
        var tmpFlags = 1;
        //console.log("For " + f);
        var peekTmpBefore = peeks[0];
        for (var j = 1; j <= peeks.length - 1; j++) {

            var peekTmp = peeks[j];


            if ((peekTmp - peekTmpBefore) >= f) {
                tmpFlags++;
                peekTmpBefore = peekTmp;

            }

            if (tmpFlags >= f) {
                break;
            }
        }
        if (tmpFlags > retVal) {
            retVal = tmpFlags;
        }
        if (retVal >= f) {
            return retVal;
        }
        //console.log(tmpFlags);
        tmpFlags = 1;
    }
    return retVal;


}
console.log(solution([0, 1, 0, 0, 0, 1, 0, 1, 0, 1]));