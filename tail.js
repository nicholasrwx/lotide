

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  }
  console.assert(actual === expected, `${undefined}`);
};

const tail = function (array) {
  let newarray = [];
  for (let x = 1; x < array.length; x++) {
    newarray.push(array[x]);
  }
  return newarray;
};

//test case for original array
const words = ["This", "Array", "Is Mine"]; //create an array
tail(words); //run the array
assertEqual(words.length, 3); //check to see if it returns differently

//test case for newarray
const Altered = tail(words); //saving the returned in a variable
assertEqual(Altered.length, 2); //checking to see if the returned value has been altered
assertEqual(Altered[0], "Array");
assertEqual(Altered[1], "Is Mine");
