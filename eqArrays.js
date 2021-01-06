const assertEqual = function (actual, expected) {       //same assert function from assertEquals

  let msg1 = 'true'
  let msg2 = 'false';

  if (actual === expected) {
    console.log(`Assertion passed: ${msg1}`);           //if the arrays are true, log this msg
  }
  console.assert(actual === expected, `${msg2}`);       //else, if arrays are not true, assert this msg.


};


function eqArrays(Array1, Array2) {                           //created a new function that compares two arrays element by element

  let elMatch = 0;
  let result = false;

  for (let x = 0; x < Array1.length; x++) {

    Array1[x] === Array2[x] ? elMatch += 1 : result = false; //if the elements match, add one to elMatch, else result is false   

  }

  elMatch === Array1.length ? result = true : result = false; //if every element matched, result is true, else result is false 

  return result;                                              //return result

}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true 
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);  // => false //reverse arrays

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false //differen't type in second array
