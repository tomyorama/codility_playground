function solution(A, B) {
    // write your code in JavaScript (Node.js 4.0.0)

    return dikstra({ x: A, y: B });
}



function dikstra(end) {
    var END_X = end.x;
    var END_Y = end.y;
    //0. step
    var tmpGraph = new Array(END_X).fill(0).map(x => new Array(END_Y));
    var permanentNodes = new Array(END_X).fill(0).map(x => new Array(END_Y));
    var tmpNode = null;
    tmpGraph[0][0] = 0
    while (true) {
        //1. step
        for (var i = 0; i <= END_X - 1; i++) {
            for (var j = 0; j <= END_X - 1; j++) {
                var element = tmpGraph[i][j];
                var isPermanent = permanentNodes[i][j];
                if (isPermanent) {
                    //if permanent continue!
                    continue;
                }
                if (element === undefined) {
                    //inifinity
                    if (tmpNode === null) {
                        //get first free if no node selected!
                        tmpNode = { x: i, y: j, value: Number.POSITIVE_INFINITY };
                    }
                } else {
                    if (tmpNode === null || (tmpNode.value > element)) {
                        tmpNode = { x: i, y: j, value: element };
                    }
                }
            }
        }
        if (tmpNode === null) {
            //finish
            return tmpGraph;
        }
        permanentNodes[tmpNode.x][tmpNode.y] = 1;


        //3. step
        for (var index = 1; index <= 7; index++) {
            //first
            var tmpX = 0;
            var tmpY = 0;
            var tmpPathValue = tmpNode.value + 1;

            //horse steps!!
            var step = getHorseStep(index, tmpNode);
            tmpX = step.x;
            tmpY = step.y;

            //

            if (inBoundary(tmpX, 0, END_X - 1)
                && inBoundary(tmpY, 0, END_Y - 1)) {
                var adjancedNode = tmpGraph[tmpX][tmpY];
                var isPermanent = permanentNodes[tmpX][tmpY];
                if (adjancedNode === undefined) {
                    tmpGraph[tmpX][tmpY] = tmpPathValue;
                } else if (adjancedNode > tmpPathValue && !isPermanent) {
                    tmpGraph[tmpX][tmpY] = tmpPathValue;
                }
            }
        }

        //set tmp node to null!!
        tmpNode = null;
    }

}
function getHorseStep(index, tmpNode) {
    var tmpX = 0;
    var tmpY = 0;
    if (index === 1) {
        tmpX = tmpNode.x + 1;
        tmpY = tmpNode.y + 2;
    } else if (index === 2) {
        tmpX = tmpNode.x + 2;
        tmpY = tmpNode.y + 1;
    } else if (index === 3) {
        tmpX = tmpNode.x + 2;
        tmpY = tmpNode.y - 1;
    } else if (index === 4) {
        tmpX = tmpNode.x + 1;
        tmpY = tmpNode.y - 2;
    } else if (index === 5) {
        tmpX = tmpNode.x - 1;
        tmpY = tmpNode.y - 2;
    } else if (index === 6) {
        tmpX = tmpNode.x - 2;
        tmpY = tmpNode.y - 1;
    } else if (index === 7) {
        tmpX = tmpNode.x - 2;
        tmpY = tmpNode.y + 1;
    }
    else if (index === 8) {
        tmpX = tmpNode.x - 1;
        tmpY = tmpNode.y + 2;
    }
    return { x: tmpX, y: tmpY }

}

function inBoundary(x, A, B) {
    return x >= A && x <= B;
}

//test cases
printSolution(solution(20, 20));

function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}

function printSolution(solution) {
    for (var index = 0; index <= solution.length - 1; index++) {
        var ele = solution[index];
        for (var j = 0; j <= ele.length - 1; j++) {
            var path = ele[j];
            var formatted = zeroPad(path, 3);
            if (j !== 0) {
                formatted = ", " + formatted;
            }
            process.stdout.write(formatted);
        }
        process.stdout.write("\n");
    }
}