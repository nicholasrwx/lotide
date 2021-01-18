const assertArraysEqual = require("./assertArraysEqual");

const takeUntil = function (array, callback) {
  let newArray = [];
  for (let arr of array) {
    if (callback(arr)) {
      break;
    } else if (!callback(arr)) {
      newArray.push(arr);
    }
  }

  return newArray;
};

const aRay = [
  "I",
  "Killed",
  "It",
  "This",
  "Weekend",
  "*",
  "I",
  "Did",
  "Over",
  "30",
  "Assignments",
];

const rezZultz = takeUntil(aRay, (el) => el === "*");

console.log(rezZultz);

assertArraysEqual(rezZultz, ["I", "Killed", "It", "This", "Weekend"]); //results equals expeected -> true
assertArraysEqual(rezZultz, aRay); //results are the same as original array -> false
assertArraysEqual(Array.isArray(rezZultz), true); //the result is an array -> true

