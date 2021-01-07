const assertEqual = function (Array1, Array2) {
  let msg1 = `${Array1} === ${Array2}`;
  let msg2 = `${Array1} !== ${Array2}`;

  if (eqArrays(Array1, Array2)) {
    console.log(`Assertion passed: ${msg1}`);
  }
  console.assert(eqArrays(Array1, Array2), `${msg2}`);
};

function eqArrays(Array1, Array2) {
  //callback function, compares two arrays element by element
  let result = false;

  if (
    typeof Array1 === typeof Array2 &&
    Array1 != undefined &&
    Array2 != undefined
  ) {
    //if both are Arrays, compare each element

    for (let x = 0; x < Array1.length; x++) {
      Array1[x] === Array2[x] ? (result = true) : (result = false); //if all the elements match, result is true
    }
  } else if (Array1 === undefined && Array2 === undefined) {
    //if types are both undefined, result is true

    result = true;
  } else if (
    typeof Array1 !== typeof Array2 &&
    Array1 != undefined &&
    Array2 != undefined
  ) {
    //if both are different types

    for (let x = 0; x < Array1.length; x++) {
      Array1[x] === Array2 ? (result = true) : (result = false); //if all the elements match, result is true
    }
  } else {
    result = false;
  }

  return result;
}

const letterPositions = function (sentence) {
  sentence = sentence.toLowerCase();
  var newObject = {};

  for (let l = 0; l < sentence.length; l++) {
    let newKey = sentence[l];

    if (newObject[newKey]) {
      newObject[newKey].push(l);
    } else if (
      !newObject[newKey] &&
      newKey != "'" &&
      newKey != "," &&
      newKey != "." &&
      newKey != " "
    ) {
      newObject[newKey] = [];
      newObject[newKey].push(l);
    } else {
      continue;
    }
  }
  return newObject;
};

let sentence = "light house";

var result = letterPositions(sentence);
console.log(result);

assertEqual(letterPositions("hello").e, [1]); //pass- same type comparison
assertEqual(letterPositions("I'm")["I"], undefined); //pass- undefined comparison
assertEqual(letterPositions("hello").o, 4); //pass- differen't type comparison
