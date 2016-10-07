    function solution(K, M, A) {

        var N = A.length;
        if (N === 0) {
            return 0;
        }


        var sumA = A.reduce((acc, x) => acc + x, 0);
        var lowerBound = Math.max.apply(null, A);
        var upperBound = sumA;

        if (K == 1) return upperBound;
        if (K >= N) return lowerBound;


        var result = 0;
        while (lowerBound <= upperBound) {
            var mid = Math.ceil((lowerBound + upperBound) / 2);
            var minBlocks = noBlocks(A, mid);
            if (minBlocks <= K) {
                upperBound = mid - 1;
                result = mid;
            } else {
                lowerBound = mid + 1;
            }
        }
        return result;
    }

    function noBlocks(A, maxBlock) {
        ///A.length > 0!!
        var N = A.length;
        var retVal = 1;
        var blockTmpSum = A[0];
        for (var i = 1; i < N; i++) {
            var elem = A[i];
            if (blockTmpSum + elem > maxBlock) {
                retVal++;
                blockTmpSum = elem;
            } else {
                blockTmpSum += elem;
            }

        }
        return retVal;


    }
    solution(4, 10, [3, 4, 5, 6, 7, 8]) //expected 11