function float2int(value) {
    return value | 0;
}

function getFn(N) {
    var sqrt5 = Math.sqrt(5);
    var ff1 = Math.pow((1 + sqrt5) / 2, N);
    var ff2 = Math.pow((1 - sqrt5) / 2, N);
    return Math.round((1 / sqrt5) * (ff1 - ff2));
}

function Fib(N) {
    var retVal = [0, 1];
    for (var i = 2; i <= N; i++) {
        var val = retVal[i - 1] + retVal[i - 2];
        retVal[i] = val;
    }
    return retVal;
}

function solution(A, B) {

    var N = A.length;
    var retval = [];

    var allFib = Fib(N + 1);

    for (var i = 0; i < N; i++) {
        var fib = getFn(A[i] + 1);
        var pow = (1 << B[i]) - 1;
        retval[i] = fib & pow;
    }
    return retval;
}
console.log(solution([4, 4, 5, 5, 1], [3, 2, 4, 3, 1]));