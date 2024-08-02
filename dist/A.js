"use strict";
function max(array) {
    if (array.length === 0) {
        throw new Error("Array is empty.");
    }
    const result = array.reduce((maxValue, currentValue) => (maxValue = currentValue > maxValue ? currentValue : maxValue), array[0]);
    return result;
}
console.log(max([-1, 4, 30, 2, -4]));
console.log(max([3, 4, 5, 6, 7]));
