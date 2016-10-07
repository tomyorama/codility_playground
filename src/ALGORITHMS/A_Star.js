///
///
///
///-------TODO ALL-------
///
///
//

function A * (start, goal) {
    // The set of nodes already evaluated.
    var closedSet = []
        // The set of currently discovered nodes still to be evaluated.
        // Initially, only the start node is known.
    var openSet = [start]
        // For each node, which node it can most efficiently be reached from.
        // If a node can be reached from many nodes, cameFrom will eventually contain the
        // most efficient previous step.
    var cameFrom = [];

    // For each node, the cost of getting from the start node to that node.
    var gScore = {}; //map with default value of Infinity
    // The cost of going from start to start is zero.
    var gScore[start] = 0;
    // For each node, the total cost of getting from the start node to the goal
    // by passing by that node. That value is partly known, partly heuristic.
    var fScore = [] //map with default value of Infinity
        // For the first node, that value is completely heuristic.
    var fScore[start] = heuristic_cost_estimate(start, goal);

    while (openSet.length) {
        var current = 0 //the node in openSet having the lowest fScore[] value
        if (current == goal) {
            return reconstruct_path(cameFrom, current)

        }
        openSet.Remove(current)
        closedSet.Add(current)
        for

    }


    for each neighbor of current
    if neighbor in closedSet
    continue // Ignore the neighbor which is already evaluated.
    // The distance from start to a neighbor
    tentative_gScore: = gScore[current] + dist_between(current, neighbor)
    if neighbor not in openSet // Discover a new node
    openSet.Add(neighbor)
    else if tentative_gScore >= gScore[neighbor]
    continue // This is not a better path.

    // This path is the best until now. Record it!
    cameFrom[neighbor]: = current
    gScore[neighbor]: = tentative_gScore
    fScore[neighbor]: = gScore[neighbor] + heuristic_cost_estimate(neighbor, goal)

    return failure
}


function heuristic_cost_estimate(start, goal) {

    return 0;

}

// function reconstruct_path(cameFrom, current)
// total_path: = [current]
// while current in cameFrom.Keys:
//     current: = cameFrom[current]
// total_path.append(current)
// return total_path