var CLOSED_B = ')';
var OPEN_B = '(';


function solution(S, K) {
    // write your code in JavaScript (Node.js 6.4.0)
    var N = S.length;

    var makeStackOBJ = getStackOfReminders(S);
    var stack = makeStackOBJ.stack;
    var NUM_OF_LEFT = makeStackOBJ.NUM_OF_LEFT;


    var max = 0;
    var tmpMax = 0;
    if (stack.length === 0) {
        return N;
    }


    var prevIndex = 0;
    for (var i = 0; i < stack.length; i++) {
        if (K !== 0) {
            ///
            var CLOSED_LEFT = NUM_OF_LEFT[CLOSED_B] - i;
            var OPENED_LEFT = CLOSED_LEFT > 0 ? NUM_OF_LEFT[OPEN_B] : NUM_OF_LEFT[OPEN_B] + CLOSED_LEFT;
            if (OPENED_LEFT > 0 && CLOSED_LEFT > 0) {
                var isODD_CLOSED = Math.ceil(CLOSED_LEFT % 2);
                var isODD_OPENED = Math.ceil(OPENED_LEFT % 2);
                var isTOTAL_ODD = Math.ceil((stack.length - i) % 2);
                var numOfK_Need_CLOSED = Math.ceil((CLOSED_LEFT) / 2);
                var numOfK_Need_OPENED = Math.ceil((OPENED_LEFT) / 2);
                // if (K < numOfK_Need_CLOSED && isODD_CLOSED) {
                //     ///expand to next!!!!
                //     var nextIndex = stack[NUM_OF_LEFT[CLOSED_B]].index - 1;
                //     tmpMax = nextIndex - prevIndex;
                //     max = Math.max(max, tmpMax);
                // } else 
                if (K <= numOfK_Need_CLOSED) {
                    var index = (K) * 2 + i;
                    if (isODD_CLOSED && K === numOfK_Need_CLOSED) {
                        var index = (K - isODD_CLOSED) * 2 + i;
                    }
                    var maxIndex = stack[index].index;
                    tmpMax = maxIndex - prevIndex;
                    max = Math.max(max, tmpMax);
                } else {
                    var totalKNeeded = numOfK_Need_CLOSED + numOfK_Need_OPENED;
                    if (K < totalKNeeded) {
                        var caclIndex = K * 2 + i - isODD_CLOSED;
                        //
                        if (isODD_CLOSED) {
                            caclIndex = K * 2 + i - isODD_CLOSED - isODD_OPENED;
                        }
                        var maxIndex = stack[caclIndex].index;
                        tmpMax = (maxIndex - prevIndex);
                        tmpMax += tmpMax % 2; //must be even
                        max = Math.max(max, tmpMax);
                    } else {
                        if (isTOTAL_ODD) {
                            //from current till last
                            var lastElementIndex = N - 1; //stack[stack.length - 1].index;
                            tmpMax = lastElementIndex - prevIndex;
                            max = Math.max(max, tmpMax);
                        } else {
                            tmpMax = N - prevIndex;
                            max = Math.max(max, tmpMax);
                        }
                    }
                }
            } else if (CLOSED_LEFT > 0 || OPENED_LEFT > 0) {

                var NUM_LEFT = Math.max(CLOSED_LEFT, OPENED_LEFT);

                var isODD = Math.ceil(NUM_LEFT % 2);
                var numOfK_Needed = Math.ceil((NUM_LEFT) / 2);
                if (K < numOfK_Needed) {
                    var maxIndex = stack[K * 2 + i].index;
                    tmpMax = maxIndex - prevIndex;
                    max = Math.max(max, tmpMax);
                } else if (isODD) {
                    //from current till last
                    var lastElementIndex = N - 1; //stack[stack.length - 1].index;
                    tmpMax = lastElementIndex - prevIndex;
                    tmpMax += tmpMax % 2; //must be even
                    max = Math.max(max, tmpMax);
                } else {
                    tmpMax = N - prevIndex;
                    max = Math.max(max, tmpMax);
                }
            } else {
                tmpMax = N - prevIndex;
                max = Math.max(max, tmpMax);
            }
        }
        /// if K === 0
        var tmpIndex = stack[i].index;
        tmpMax = tmpIndex - prevIndex;
        max = Math.max(max, tmpMax);
        if (i === stack.length - 1) {
            //check last 
            tmpMax = N - tmpIndex - 1;
            max = Math.max(max, tmpMax);
        }

        ///next
        prevIndex = tmpIndex + 1;

    }

    return max;

}

function getStackOfReminders(S) {
    var N = S.length;
    var NUM_OF_LEFT = {};
    NUM_OF_LEFT[CLOSED_B] = 0;
    NUM_OF_LEFT[OPEN_B] = 0;

    var stack = [];
    //retVal
    for (var i = 0; i < N; i++) {
        var elem = { value: S[i], index: i };
        if (!stack.length) {
            stack.push(elem);
            NUM_OF_LEFT[elem.value]++;
            continue;
        }
        var prev = stack[stack.length - 1];

        if (prev.value === OPEN_B && elem.value === CLOSED_B) {
            var elem = stack.pop();
            NUM_OF_LEFT[elem.value]--;
        } else {
            stack.push(elem);
            NUM_OF_LEFT[elem.value]++;
        }
    }

    return { stack: stack, NUM_OF_LEFT: NUM_OF_LEFT }
}

//console.log(solution('()(()))()(((', 2));
//console.log(solution(')))(((', 2));
//console.log(solution('(()()()))))(()((()))', 1)); //-->10 solution
//console.log(solution('))()))())(()()(()(((', 3)); //-->16
//console.log(solution('()(()))()(((', 2)); //-->10
//console.log(solution('())()', 2));