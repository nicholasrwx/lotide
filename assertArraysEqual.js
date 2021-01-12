//comparing arrays, using eqArrays callback function

const eqArrays = require("./eqArrays");

function assertArraysEqual(Array1, Array2) {
  //array that logs appropriate message, based on callback function instead of strict === comparison
  let msg1 = "true";
  let msg2 = "false";

  if (eqArrays(Array1, Array2)) {
    console.log(`Assertion passed: ${msg1}`);
  } //if eqArrays returns true

  console.assert(eqArrays(Array1, Array2), `${msg2}`); //else if false, assert this msg.
}

module.exports = assertArraysEqual;
