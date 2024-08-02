function fn(inputs: number[], k: number): number {
  let currentSum: number = 0;
  let maxSum: number = 0;

  if (k > inputs.length || k < 0) {
    throw new Error(
      "K must be greater than 0 and less than or equal to the input length."
    );
  }

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
