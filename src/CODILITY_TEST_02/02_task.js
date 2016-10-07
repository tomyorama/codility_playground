function solution(M, N) {
    // write your code in JavaScript (Node.js 6.4.0)

    if (M > N) {
        return 0;
    } else if (M === N) {
        return M;
    }
    var result = M;
    for (var i = M + 1; i <= N; i++) {
        result = result ^ i;

    }

    return result;
}

console.log(solution(5, 5))