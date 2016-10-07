    function solution(A) {
        var N = A.length;

        if (N === 0) {
            return 0;
        }
        var sortedA = A.sort();
        var MAX_NUM = 1000000000;
        var count = 0;
        var prevElem = A[0];
        var tmpCount = 1;
        for (var i = 1; i < N; i++) {
            var elem = sortedA[i];

            if (prevElem === elem) {
                tmpCount++;
                var isLast = i === (N - 1);
                if (isLast) {
                    count = count + countCombs(tmpCount);
                }
            } else {
                count = count + countCombs(tmpCount);

                if (count > MAX_NUM) {
                    return MAX_NUM;
                }
                tmpCount = 1;
                prevElem = elem;
            }

        }
        return count;

    }

    function countCombs(N) {
        var n = N - 1;
        if (n > 0) {
            return n * (n + 1) / 2;
        }
        return 0;
    }

    //console.log(solution([3, 5, 5, 6, 3, 3, 5]))
    console.log(solution([5]))