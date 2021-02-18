const ids = [1, 2, 3, 6, 9, 8, 7, 4]; // start positions ids in clockwise order
let nums = [1, 2, 3, 6, 9, 8, 7, 4];
document.getElementById("btn5").addEventListener("click", () => {
  nums.unshift(nums.pop());
  for (let i = 0; i < ids.length; i++) {
    document.getElementById("btn" + ids[i]).innerHTML = nums[i];
  }
});
