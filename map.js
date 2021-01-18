const assertArraysEqual = require('./assertArraysEqual')

const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const results1 = map(words, word => word[0]); //array is arg1, callback is arg2

console.log(results1);


assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']) //results1 equals expected results -> true
assertArraysEqual(results1, ["ground", "control", "to", "major", "tom"]) //equals original array -> false
assertArraysEqual(results1, `'g', 'c', 't', 'm', 't'`) //equals a string -> false
assertArraysEqual(Array.isArray(results1), true); //it is an array -> true


