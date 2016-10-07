function divisors(n) {
    var i = 1;
    var result = 0;
    var ipow2 = i * i;
    while (ipow2 < n) {
        if (n % i === 0) {
            result += 2;
        }
        i += 1;
        ipow2 = i * i;
        if (ipow2 == n) {
            result += 1;
        }
    }
    return result;
}

function divisorsArray(n) {
    var i = 1;
    var result = [];
    var ipow2 = i * i;
    while (ipow2 < n) {
        if (n % i === 0) {
            result.push(i);
            result.push(n / i);
        }
        i += 1;
        ipow2 = i * i;
        if (ipow2 == n) {
            result.push(i);
        }
    }
    return result;
}

function isPrime(n) {
    var i = 2;
    while (i * i <= n) {
        if (n % i === 0) {
            return false;
        }
        i += 1;
    }
    return true;
}

console.log(divisorsArray(12));