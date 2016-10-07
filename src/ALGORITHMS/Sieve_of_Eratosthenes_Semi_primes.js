function sieve(n) {
    var sieve = new Array(n + 1).fill(true);
    sieve[0] = sieve[1] = true;
    var i = 2;
    while (i * i <= n) {
        if (sieve[i]) {
            var k = i * i
            while (k <= n) {
                sieve[k] = false
                k += i
            }

        }
        i += 1;
    }

    return sieve;
}

function semie_primes(n) {
    var sieve = new Array(n + 1).fill(true);
    sieve[0] = sieve[1] = true;
    var i = 2;
    while (i * i <= n) {
        if (sieve[i]) {
            var k = i * i
            while (k <= n) {
                sieve[k] = false
                k += i
            }
        }
        i += 1;
    }

    //semi
    var semi = [];
    i = 2;
    while (i * i <= n) {
        if (sieve[i]) {
            var k = i * i
            while (k <= n) {
                if (k % i == 0 && sieve[k / i]) {
                    semi.push(k);
                }
                k += i
            }
        }
        i += 1;
    }
    return semi.sort((a, b) => a - b);
}


console.log(semie_primes(100));