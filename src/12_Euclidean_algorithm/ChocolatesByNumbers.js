function gcd(a, b) {
    if (a % b === 0) {
        return b;
    } else {
        return gcd(b, a % b);
    }
}


function solution(N, M) {
    ////We use i for the first time and j for the second time. 
    ///Due to the modulo feature, there must be nature number, to say k, so that: i * M + k * N = j * M
    //i!=0 --> (j - i) * M = k * N ---> 
    var lcm = N * M / gcd(N, M); // Least common multiple
    return lcm / M;
}