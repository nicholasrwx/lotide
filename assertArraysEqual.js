

function assertArraysEqual(Array1, Array2) {      //array that logs appropriate message, based on callback function instead of strict === comparison
  let msg1 = 'true'
  let msg2 = 'false';

  if (eqArrays(Array1, Array2)) { console.log(`Assertion passed: ${msg1}`) };     //if eqArrays returns true 

  console.assert(eqArrays(Array1, Array2), `${msg2}`);                         //else if false, assert this msg.

}

function eqArrays(Array1, Array2) {                           //callback function, compares two arrays element by element

  let result = true;

  for (let x = 0; x < Array1.length; x++) {

    Array1[x] === Array2[x] ? result = true : result = false; //if all the elements match, result is true    

  }
  return result;                                              //return result to assertArraysEqual

}






assertArraysEqual([0, 1, 3], [0, 1, 3]);                      //function call - should pass
assertArraysEqual([0, 1, 3], [0, 1, 2]);                      //function call - should fail 