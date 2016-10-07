function maxSlice(A) {
    var N = A.length;
    var maxEnding = 0;
    var max_sclice = 0;
    for (var i = 0; i < N; i++) {
        var elem = A[i];
        maxEnding = Math.max(0, maxEnding + elem);
        max_sclice = Math.max(max_sclice, maxEnding);
    }
    return max_sclice;
}

console.log(maxSlice([12, 3, 3, -10, -12, 1, 2, 33]));