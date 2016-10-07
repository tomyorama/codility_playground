function Fib(N) {
    var retVal = [0, 1];
    for (var i = 2; i <= N; i++) {
        var val = retVal[i - 1] + retVal[i - 2];
        retVal[i] = val;
        if (val >= N) {
            break;
        }
    }
    return retVal;
}
///log === leaf!!
function isFibArray(N) {
    var retVal = new Array(N + 1).fill(0);
    var prevFibMinus1 = 1;
    var prevFibMinus2 = 0;

    while (true) {
        var val = prevFibMinus1 + prevFibMinus2;
        retVal[val] = 1;
        if (val >= N) {
            break;
        } else {
            prevFibMinus2 = prevFibMinus1;
            prevFibMinus1 = val;
        }
    }
    return retVal;
}

function solution(A) {
    var N = A.length;
    var alllFib = isFibArray(N); //value 1 if index is fib!!

    if (A.length <= 2) {
        return 1;
    }
    console.log(alllFib);
    if (alllFib[N + 1]) {
        //if length is fib
        return 1;
    }
    var logs = []; /// all logs
    var allJumps = []; // jumpss to calculate
    var isReturn2 = false;
    A.forEach((x, i) => {
        if (x) {
            logs.push(i);
            if (alllFib[i + 1]) {
                if (alllFib[N - i]) {
                    isReturn2 = true; // 2 jumps
                }
                allJumps.push(logs.length - 1); //push index 0f log!!
            }
        }
    });
    if (isReturn2) {
        return 2;
    }

    var jumps = 3;
    while (jumps <= (logs.length + 1)) {
        var newJumps = []; //for next step possible jumps!!
        for (var j = 0; j < allJumps.length; j++) {
            var tmpJump = allJumps[j];
            var tmpJumpValue = logs[tmpJump];
            for (var l = tmpJump + 1; l < logs.length; l++) {
                var tmpLog = logs[l];


                if (alllFib[tmpLog - tmpJumpValue]) {
                    if (alllFib[N - tmpLog]) {
                        return jumps; //tmp min jumps!
                    } else {
                        if (l < logs.length) {
                            newJumps.push(l); //push current index!!
                        }
                    }
                }
            }


        }
        //set paths of n jumps 
        allJumps = newJumps;
        if (!allJumps.length) {
            return -1;
        }

        jumps++;
    }
    return -1;
}
var array = new Array(51).fill(0);
array[2] = 1;
array[3] = 1;

array[6] = 1;
array[9] = 1;

array[17] = 1;
solution(array);