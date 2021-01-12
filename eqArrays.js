const eqArrays = function (Array1, Array2) {
  //callback function, compares two arrays element by element

  let result = true;

  if (Array1.length === Array2.length) {
    for (let x = 0; x < Array1.length; x++) {
      Array1[x] === Array2[x] ? (result = true) : (result = false); //if all the elements match, result is true
    }
    return result;
  } else {
    result = false;
    return result;
  }
  //return result to assertArraysEqual
};

module.exports = eqArrays;
