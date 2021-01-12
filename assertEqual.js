const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  }
  console.assert(actual === expected, `${actual} !== ${expected}`);
};

module.exports = assertEqual; // not passing the function, just the variable
