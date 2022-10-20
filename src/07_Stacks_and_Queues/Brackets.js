/**
 * 
 * @param {string} S 
 * @returns 
 */
function solution(S) {
    var q = [];
    for (var i = 0; i <= S.length - 1; i++) {
        var letter = S[i];
        if (letter == '(' || letter === '[' || letter === '{') {
            q.push(letter);
        } else {
            if (q.length) {
                var first = q.pop();
                if ((letter === ')' && first === '(') ||
                    (letter === ']' && first === '[') ||
                    (letter === '}' && first === '{')) {
                    continue;
                } else {
                    return 0;
                }
            } else {
                return 0;
            }
        }
    }
    
    return q.length > 0 ? 0 : 1;
};

console.log(solution('([)()]'))
console.log(solution('{[()()]}'))