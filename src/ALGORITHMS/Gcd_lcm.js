function gcd(a, b) {
    if (a % b === 0) {
        return b;
    } else {
        return gcd(b, a % b);
    }
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function lcmN(A) {
    var N = A.length;
    if (N === 0) {
        return 0; //?
    } else if (N === 1) {
        return A[0]; //?
    } else if (N == 2) {
        return lcm(A[0], A[1]);
    } else {
        var first = A.shift();
        return lcm(first, lcmN(A));
    }

}

console.log(lcm(1, 5));
console.log(lcmN([1, 3, 5]));