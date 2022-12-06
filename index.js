const args = process.argv.slice(2);

const nums = args[0].split(",").map(num => parseInt(num)), sum = parseInt(args[1]);
const numsSorted = nums.sort((a, b) => a - b);
let sol = true;

const findPairs = (nums, sum) => {
	let low = 0, high = nums.length-1;
	
	while (low < high) {
		if (nums[low] + nums[high] === sum) {
			console.log(`${nums[low]}, ${nums[high]}`);
			return nums.splice(low, 1).splice(high, 1);
		}
		else if (nums[low] + nums[high] < sum) low++;
		else if (nums[low] + nums[high] > sum) high--;
	}

	return null;
};

do {
	const res = findPairs(numsSorted, sum);
	if (res === null) sol = false;
} while (sol === true)