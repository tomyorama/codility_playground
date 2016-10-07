function solution(X, A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var N = A.length;
    var sums = [];

    var tmpCount = 0;
    for (var i = 0; i <= N - 1; i++) {
        var elem = A[i];
                if(elem === X){
            tmpCount++;
        }
        sums.push(tmpCount);

    }
    //console.log(sums)
    var totalCount = tmpCount;
    if(totalCount === 0){
        return A.length;
    }else if(totalCount === A.length){
        return 0;
    }
    var tmpSum = 0;
    for (var j = 0; j <= N - 1; j++) {
        if(j>0){
            tmpSum = sums[j-1];
        }
        var leftCount = totalCount - tmpSum;
        var leftElemets = N - j;
        var opositeCount = leftElemets - leftCount;
        //console.log("leftElemets " + leftElemets);
        //console.log("opositeCount " + opositeCount);
        if(tmpSum == opositeCount){
            return j;
        }
    }
    return -1;
}

//test cases
//console.log(solution(3, [3, 1, 2, 4, 3]));
console.log(solution(2,[1,1,2,2,1,1,1,1]));

console.log(solution(2,[2,1,2,2,1,1,1,1]));