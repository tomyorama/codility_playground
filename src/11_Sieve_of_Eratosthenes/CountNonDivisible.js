function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)

    var nonDivisCount = [];
    var N = A.length;
    for (var i = 0; i < N; i++) {
        var elem = A[i];
        nonDivisCount[i] = nonDivisCount[i] || 0;

        for (var j = i + 1; j < N; j++) {
            var elem2 = A[j];
            nonDivisCount[j] = nonDivisCount[j] || 0;
            if ((elem % elem2)) {
                //divisible
                nonDivisCount[i]++;
            }
            if ((elem2 % elem)) {
                nonDivisCount[j]++;
            }
        }
    }

    return nonDivisCount;
}

solution([3, 1, 2, 3, 6]);