

const assertEqual = function(actual, expected) {
  let msg1 = `${actual} === ${expected}`;
  let msg2 = `${actual} !== ${expected}`;

  if (actual === expected) {
    console.log(`Assertion passed: ${msg1}`);
  }
  console.assert(actual === expected, `Assertion failed: ${msg2}`);
};

const countOnly = function(allItems, itemsToCount) {
  let newObject = {};

  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (newObject[item]) {
        newObject[item] += 1;
      } else {
        newObject[item] = 1;
      }
    }
  }

  return newObject;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

//assertEqual(result1["Jason"], 1);
//assertEqual(result1["Karima"], undefined);
//assertEqual(result1["Fang"], 2);
//assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;