function semiePrimes(N) {
    var AllNums = new Array(N).fill(0);
    var semiPrimes = new Array(N).fill(false);
    var n = 2;
    while (n <= N) {
        var tmpN = n;
        var multiply = 2;
        var isPrime = !AllNums[n];
        while (tmpN <= N) {
            tmpN = n * multiply;
            AllNums[tmpN]++;


            //semiprime --> multiple must be smaller than tmp prime because we don-t know is prime if higher!!
            if (isPrime && multiply <= n) {
                var isPrimeMultiply = !AllNums[multiply];
                if (isPrimeMultiply) {
                    semiPrimes[tmpN] = true;
                }
            }
            //
            multiply++;
        }
        n++;
    }

    var retValPrimes = [];
    var retValSemiPrimes = [];
    for (var i = 0; i <= N; i++) {
        if (!AllNums[i]) {
            retValPrimes.push(i);
        }
        //semiprimes
        if (semiPrimes[i]) {
            retValSemiPrimes.push(i);
        }
    }
    return retValSemiPrimes;
}

function solution(N, P, Q) {
    // write your code in JavaScript (Node.js 4.0.0)
    var semiPrimes = semiePrimes(N);


    var semiprimesSums = [];
    var semiSum = 0;
    var j = 0;
    for (var i = 0; i < semiPrimes.length; i++) {
        var tmpSemiPrime = semiPrimes[i];
        while (j < tmpSemiPrime) {
            semiprimesSums[j] = semiSum;
            j++;
        }
        semiSum++;
    }
    //populate rest of sums with totalSUm
    while (j <= N) {
        semiprimesSums[j] = semiSum;
        j++;
    }
    var NN = P.length;
    var retVal = [];
    for (i = 0; i < NN; i++) {
        var start = P[i];
        var end = Q[i];
        var sliceSum = semiprimesSums[end] - semiprimesSums[start - 1];

        if (start === 0) {
            sliceSum = semiprimesSums[end];
        }
        retVal.push(sliceSum);
    }
    return retVal;

}