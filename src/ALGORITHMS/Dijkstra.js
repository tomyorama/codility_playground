function dijkstra(graph, startNodeId) {
    //0 Step init‰
    var Q = {};
    var dist = {};
    var prev = {};

    Object.keys(graph).forEach((x, i) => {
        dist[x] = Infinity
        prev[x] = null;
        Q[x] = true;
    });
    dist[startNodeId] = 0;
    //
    var notDone = !!Object.keys(Q).length;
    while (notDone) {
        //1. step get min distance node
        var minIdNode = getMinTmpNode(Q, dist);
        var node = graph[minIdNode];
        delete Q[minIdNode];

        //2.step
        Object.keys(node).forEach((x, i) => {
            var alt = dist[minIdNode] + node[x];
            if (alt < dist[x]) {
                dist[x] = alt;
                prev[x] = minIdNode
            }
        });

        notDone = !!Object.keys(Q).length;
    }

    return dist;

}

function getMinTmpNode(Q, dist) {
    var min = { dist: Infinity, id: null };
    Object.keys(Q).forEach((x, i) => {
        if (dist[x] < min.dist) {
            min = { dist: dist[x], id: x };
        }
    });
    return min.id;
}

//dijkstra({ '1n': { '2n': 1, '3n': 1 }, '2n': { '3n': 2 }, '3n': {} }, '1n');

//////////////////////////////////
var chessKnightsMoves = MakeChessKnightStepsGraph(100, 100);
console.log(dijkstra(chessKnightsMoves, 'R0C0'));

function MakeChessKnightStepsGraph(ROWS, COLUMNS) {
    var graph = {};

    for (var i = 0; i < ROWS; i++) {
        for (var j = 0; j < COLUMNS; j++) {

            var chessFieldId = "R" + i + "C" + j;
            var node = {};
            for (var index = 1; index <= 7; index++) {
                var adjacencedNode = getHorseSteps(index, { x: i, y: j })
                if (adjacencedNode.x >= 0 && adjacencedNode.y >= 0) {
                    var adjacencedNodeId = "R" + adjacencedNode.x + "C" + adjacencedNode.y;
                    node[adjacencedNodeId] = 1;
                }
            }
            graph[chessFieldId] = node;

        }
    }
    return graph;
}

function getHorseSteps(index, tmpNode) {
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
    } else if (index === 8) {
        tmpX = tmpNode.x - 1;
        tmpY = tmpNode.y + 2;
    }
    return { x: tmpX, y: tmpY }

}