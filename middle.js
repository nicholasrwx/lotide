

const eqArrays = function(Array1, Array2) {                           //callback function, compares two arrays element by element

  let result = true;

  if (Array1.length === Array2.length) {


    for (let x = 0; x < Array1.length; x++) {
      Array1[x] === Array2[x] ? result = true : result = false; //if all the elements match, result is true
    }
    return result;
  } else {
    result = false;
    return result;
  }
  //return result to assertArraysEqual
};


const assertArraysEqual = function(Array1, Array2) {      //array that logs appropriate message, based on callback function instead of strict === comparison

  let msg1 = 'true';
  let msg2 = 'false';

  if (eqArrays(Array1, Array2)) {
    console.log(`Assertion passed: ${msg1}`);
  }     //if eqArrays returns true

  console.assert(eqArrays(Array1, Array2), `${msg2}`);                         //else if false, assert this msg.

};


const middle = function(Array) {

  let newArray = [];

  if (Array.length <= 2) {
    return newArray;

  } else if (Array.length % 2 === 0) {
    let x = (Array.length) / 2;
    newArray.push(Array[x - 1]);
    newArray.push(Array[x]);

  } else {
    let x = (Array.length - 1) / 2;
    newArray.push(Array[x]);

  }

  return newArray;
};


assertArraysEqual(middle([1, 2]), []); //true
assertArraysEqual(middle([1, 2]), [1, 2]); //false
assertArraysEqual(middle([1, 2, 3]), [2]); //true
assertArraysEqual(middle([1, 2, 3]), ['2']); //false
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); //true
assertArraysEqual(middle([1, 2, 3, 4]), ['two', 'three']); //false
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); //true
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3, 4]); //false
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); //true
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [2, 3, 4, 5]); //false
