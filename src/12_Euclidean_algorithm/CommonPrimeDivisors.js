function primes(N) {
    var AllNums = new Array(N + 1).fill(0);
    var semiPrimes = new Array(N).fill(false);
    var n = 2;
    while (n <= N) {
        var tmpN = n;
        var multiply = 2;
        var isPrime = !AllNums[n];
        while (tmpN <= N) {
            tmpN = n * multiply;
            AllNums[tmpN]++;
            multiply++;
        }
        n++;
    }

    var retValPrimes = [];
    for (var i = 2; i <= N; i++) {
        if (AllNums[i] == 0) {
            retValPrimes.push(i);
        }
    }
    return retValPrimes;
}

function solution(A, B) {
    var N = A.length;
    var max = Math.max(...A, ...B);
    var primesAll = primes(max);
    //console.log(primesAll)
    var retVal = 0;
    for (var i = 0; i < N; i++) {
        var first = A[i];
        var second = B[i];
        var maxTmp = Math.max(first, second);
        var hasSametmp = true;
        var primeIndex = 0;
        var hasPrimes = !!(primesAll.length);
        while (hasSametmp && hasPrimes) {
            var prime = primesAll[primeIndex];
            if (prime > maxTmp) {
                break;
            }
            if (!!(first % prime) === !!(second % prime)) {
                //ok;
            } else {
                hasSametmp = false;
                break;
            }
            //next prime
            primeIndex++;
            hasPrimes = primeIndex < primesAll.length;
        }

        if (hasSametmp) {
            retVal++;
        }
    }
    console.log(retVal);
    return retVal;


}
solution([2, 1, 2], [1, 2, 2]);