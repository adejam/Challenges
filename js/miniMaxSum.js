const min = Math.min(...arr);
const max = Math.max(...arr);
const arraySum = arr.reduce((a, b) => {
  return a + b;
}, 0);
const minSum = arraySum - max;
const maxSum = arraySum - min;
console.log(`${minSum} ${maxSum}`);
