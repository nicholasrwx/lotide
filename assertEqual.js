//created a function to use console.assert() 
//as a method to check for correct outputs

const assertEqual = function (actual, expected) {

  let msg1 = '1 === 1'
  let msg2 = '"Lighthouse Labs" !== "Bootcamp"';

  if (actual === expected) {
    console.log(`Assertion passed: ${msg1}`);
  }
  console.assert(actual === expected, `${msg2}`);

};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


