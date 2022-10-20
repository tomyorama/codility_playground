/**
 *  perimeter is 2 * (A + B).
 * @param {number} N area of rectangles (A * B)
 * @returns maximal perimeter of rectang
 */
function solution(N) {


    if (N == 1) {
        return 4;
    }
    if (N == 2) {
        return 6;
    }
    var min = 1000000000;
    var isAny = false;
    for (var i = 2; i <= Math.floor(Math.sqrt(N)); i++) {
        var divide = N / i;
        if (divide % 1) {
            continue;
        } else {
            isAny = true;
            var perimeter = 2 * (i + divide);
            if (min > perimeter) {
                min = perimeter;
            }
        }

    }
    if (!isAny) {
        return (N + 1) * 2;
    }
    return min;
}

console.log(solution(30));