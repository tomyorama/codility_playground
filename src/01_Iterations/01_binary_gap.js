
/**
 * A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
 * 
 * @param {*} N number 
 * @returns max Binary GAP for N
 */
function solution(N) {
    // 
    var log2 = Math.log2(N);
    if (log2 % 1 === 0) {
        return 0;
    }
    var maxLog = Math.floor(log2);
    var tmpNum = 0;
    var numOfZeros = 0;
    var tmpnumOfZeros = 0;
    for (var i = maxLog; i >= 0; i--) {
        var tmpPow = Math.pow(2, i);
        tmpNum += tmpPow;
        if (tmpNum > N) {
            tmpNum -= tmpPow;
            tmpnumOfZeros++;
            if (numOfZeros < tmpnumOfZeros) {
                numOfZeros = tmpnumOfZeros;
            }
        } else if (tmpNum == N) {
            break;

        } else {
            tmpnumOfZeros = 0;
        }
    }
    return numOfZeros;
}
console.log(solution(32)) //