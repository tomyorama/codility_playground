/**
 * 
 * @param {Array<number>} H array of height of wall at distnce i-index
 * @returns total numbner of blocks (rectangular any dim X*X e.g. 12X7)
 */
function solution(H) {
		var count = 0;
		var stack = [];

		for (var i = 0; i <= H.length - 1; i++) {
		var h = H[i];

		if (stack.length) {
			var prev = stack[stack.length - 1];

			if (prev.h == h) {
				continue;
			} else if (prev.h > h) {
				//down
				while (prev) {
					if (prev.h > h) {
						stack.pop();
						prev = stack[stack.length - 1];
						count++;
					}else if (prev.h == h) {
						stack.pop();
						prev = stack[stack.length - 1];
					}else {
						break;
					}
				}

				stack.push({
					h: h
				});
			} else if (prev.h < h) {
				stack.push({
					h: h
				});
			}
		} else {
			stack.push({
				h: h
			});
		}
	}

	return count + stack.length;
}
console.log(solution([8, 8, 5, 7, 9, 8, 7, 4, 8]));