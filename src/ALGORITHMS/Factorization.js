function arrayF(n) {
    var F = new Array(n + 1).fill(0);
    var i = 2;
    while (i * i <= n) {
        if (F[i] === 0) {
            var k = i * i
            while (k <= n) {
                if (F[k] === 0) {
                    F[k] = i;
                }
                k += i
            }
        }
        i += 1;
    }
    return F;
}

function factorization(x) {

    var F = arrayF(x);
    var primeFactors = [];
    var tmpX = x;
    while (F[tmpX] > 0) {
        primeFactors.push(F[tmpX]);
        tmpX /= F[tmpX];
    }
    primeFactors.push(tmpX);
    return primeFactors;


}
factorization(1000);