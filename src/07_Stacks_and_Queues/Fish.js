/**
 * 
 * @param {Array<number>} A represends fish sizes
 * @param {Array<number>} B represends direction 0 downstrea, 1 upstream
 * @returns number of fish in river left after big fish eats small ish
 */
function solution(A, B) {

	var allFishStack = [];

	for (var i = 0; i <= A.length - 1; i++) {
		var fish = {
			direction: B[i],
			size: A[i]
		};

		if (allFishStack.length) {
			var topFish = allFishStack[allFishStack.length - 1];
			if (topFish.direction != fish.direction) {
				if (topFish.direction && topFish.size > fish.size) {
					// nothing eats
					continue;
				} else if (topFish.direction && topFish.size < fish.size) {
					while (true) {
						if (topFish && topFish.direction && topFish.size < fish.size) {
							allFishStack.pop();
							topFish = allFishStack[allFishStack.length - 1];
						} else if (topFish && topFish.direction && topFish.size > fish.size) {
							//nothing eats
							break;
						}else {
							allFishStack.push(fish);
							break;
						}
					}
					

				} else {
					allFishStack.push(fish);
				}
			} else {
				allFishStack.push(fish);
			}

		} else {
			allFishStack.push(fish);
		}
	}
	return allFishStack.length;


}

console.log(solution([3, 4, 5], [1, 0, 0]));