/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
const modifyArray = (nums) => {
  return nums.map((num) => num * (num % 2 === 0 ? 2 : 3));
};
