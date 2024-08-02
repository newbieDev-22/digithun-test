function max(array) {
  if (array.length === 0) {
    throw new Error("Array is empty.");
  }
  const result = array.reduce(
    (maxValue, currentValue) =>
      (maxValue = currentValue > maxValue ? currentValue : maxValue),
    array[0]
  );
  return result;
}

function secondMax(array) {
  if (array.length === 0) {
    throw new Error("Array is empty.");
  }
  const dummyArray = [...array];
  const maxIndex = array.indexOf(max(dummyArray));
  if (maxIndex !== -1) {
    dummyArray.splice(maxIndex, 1);
    return max(dummyArray);
  }
}

console.log(secondMax([-1, 4, 30, 2, -4]));
console.log(secondMax([3, 4, 5, 6, 7]));
console.log(secondMax([3, 4, 5, 6, 7, 7]));
