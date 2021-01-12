const eqObjects = function (object1, object2) {
  //if objects are unequal in length we know its false, therefore
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  //every object key value must be the same, otherwise its false
  for (let key in object1) {
    //checking if object key exists first
    if (!object2.hasOwnProperty(key)) {
      return false;
    }

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      //comparing object key values
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  //objects must be the same at this point, therefore return true
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;

  //  console.log(actual === expected);

  let msg1 = `${inspect(actual)} === ${inspect(expected)}`;
  let msg2 = ` ${inspect(actual)} !== ${inspect(expected)}`;

  if (eqObjects(actual, expected)) {
    console.log(`Assertion passed: ${msg1}`);
  }
  console.assert(eqObjects(actual, expected), msg2);
};

//assertObjectsEqual({ a: "4", b: 6 }, { b: 5, a: "4" }); //fail
//assertObjectsEqual({ a: 4, b: "6" }, { b: "6", a: 4 }); //pass
//assertObjectsEqual({ q: 1, w: 2, m: "3" }, { q: 1, w: 2 }); //fail
//assertObjectsEqual({ l: "5", k: 6 }, { l: "5", k: 6 }); //pass
