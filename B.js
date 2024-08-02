function fn(inputs, k) {
  let currentSum = 0;
  let maxSum = 0;
  for (let i = 0; i < inputs.length - k + 1; i++) {
    currentSum = inputs[i];
    for (let j = 1; j < k; j++) {
      currentSum = currentSum + inputs[i + j];
    }
    maxSum = currentSum > maxSum ? currentSum : maxSum;
  }

  return maxSum;
}

console.log(fn([1, 4, -1, 2, 3], 3));
console.log(fn([1, 4, -1, 2, 3], 2));
