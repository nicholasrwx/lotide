const _ = require("lodash");            //required to use _.without() method  
var checkOriginal = [];                 //pass original source array here at the end of without function


const without = function (Source, Remove) {     //without function takes a source array, and an array with elements to remove
  let newArray = Source;                          //create a newArray, that is a copy of the source to avoid modfying the source code

  for (let R of Remove) {                       //cycle through the elements in the remove array
    newArray = _.without(newArray, R)               //compare and remove using without method, one element at a time, from newArray
  }

  checkOriginal = Source;                         //pass Source to a global array, to check with eqArray and assertArraysEqual
  return newArray;                                //return new array
}


function assertArraysEqual(Array1, Array2) {      //array that logs appropriate message, based on callback function instead of strict === comparison
  let msg1 = 'True'
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




without([1, 2, 3, 4, 5], [1, 3, 5]);      //calling without function using a source array and removal array

//Test Cases
assertArraysEqual(checkOriginal, [1, 2, 3, 4, 5]); //True - original array isn't modified
assertArraysEqual(without([1, 2, 3, 4, 5], ["1", "3", "5"]), [1, 2, 3, 4, 5]); //True - a numbers-strings array CAN'T modify a numbers array
assertArraysEqual(without(["important", "test", "case"], ["important", "test"]), ["case"]) //True - a strings array can be modified using _.without()

