// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function ReplaceAll(S, search, replacement) {
    var response = S;
    while (response.indexOf(search) !== -1) {
        response = response.replace(new RegExp(search, 'g'), replacement);
    }
    return response;
};

function solution(S) {
    if (!S) {
        return S;
    }
    return ReplaceAll(ReplaceAll(ReplaceAll(ReplaceAll(ReplaceAll(ReplaceAll(S, 'AB', 'AA'), 'BA', 'AA'), 'CB', 'CC'), 'BC', 'CC'), 'AA', 'A'), 'CC', 'C');


}


console.log(solution("A"));