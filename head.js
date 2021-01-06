
// @ts-ignore
const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  }
  console.assert(actual === expected, `${undefined}`);

};

const head = function (array) {

  let value = array[0];
  return value;

};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
