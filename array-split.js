const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part = nums.slice(2, 7);
console.log(part);
console.log(nums);

const remove = nums.splice(2, 3, 77, 88);
console.log(remove);
console.log(nums);

const together = nums.join(",");
console.log(together);