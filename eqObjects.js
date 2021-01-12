

const eqArrays = function (Array1, Array2) {
  //callback function, compares two arrays element by element

  let result = true;

  for (let x = 0; x < Array1.length; x++) {
    Array1[x] === Array2[x] ? (result = true) : (result = false); //if all the elements match, result is true
  }
  return result; //return result to assertArraysEqual
}

const assertEqual = function(Value1, Value2) {
  //eqArrays(Value1, Value2)
  //log a msg, based on if the values are the same or not
  let msg1 = `${Value1} === ${Value2}`;
  let msg2 = `${Value1} !== ${Value2}`;

  if (Value1 === Value2) {
    console.log(`Assertion passed: ${msg1}`);
  }

  console.assert(Value1 === Value2, `${msg2}`);
};

const eqObjects = function(object1, object2) {
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
  console.log(true);
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
//assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
//assertEqual(eqObjects(cd, cd2), false); // => false


module.exports = eqObjects;
