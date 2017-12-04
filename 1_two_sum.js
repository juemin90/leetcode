/**
  Example:
  Given nums = [2, 7, 11, 15], target = 9,

  Because nums[0] + nums[1] = 2 + 7 = 9,
  return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let x, y;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                x = i;
                y = j;
                break;
            }
        }
    }
    return [x, y];
};

const twoSum2 = (nums, target) => {
  const map = {};
  for var (let i = 0; i < nums.length - 1; i++) {
    if (map[target - nums[i]] !== undefined) {
      return [target[target - nums[i]], i];
    } else {
      map[nums[i]] = i;
    }
  }
}
