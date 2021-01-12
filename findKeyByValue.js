

const assertEqual = function(Value1, Value2) {
  //log a msg, based on if the values are the same or not
  let msg1 = `${Value1} === ${Value2}`;
  let msg2 = `${Value1} !== ${Value2}`;

  if (eqArrays(Value1, Value2)) {
    console.log(`Assertion passed: ${msg1}`);
  }
  console.assert(eqArrays(Value1, Value2), `${msg2}`);
};

function eqArrays(Value1, Value2) {
  //Compare Values

  let result = false; //Preset results to false

  if (
    //Same type Values but Not Undefined - Cannot loop through undefined
    typeof Value1 === typeof Value2 &&
    Value1 != undefined &&
    Value2 != undefined
  ) {
    //You can't simply compare arrays, so you must loop through and compare each elemnt
    //if it's a string this would be unneccessary. could create a condition to filter that.
    for (let x = 0; x < Value1.length; x++) {
      if (Value1[x] === Value2[x]) {
        continue;
      } else {
        return result;
      }
    }
    result = true;
  }
  //if types ARE both undefined, result is true
  else if (Value1 === undefined && Value2 === undefined) {
    result = true;
  } //if types are not the same, and NEITHER are undefined
  //determine which value is the array, and which value is the string, to use the appropriate syntax to access the data in the array.
  //Compare the contents of the string in an Array, to a string
  else if (
    typeof Value1 !== typeof Value2 &&
    Value1 != undefined &&
    Value2 != undefined
  ) {
    if (typeof Value1 === typeof []) {
      for (let x = 0; x < Value1.length; x++) {
        if (Value1[x] === Value2) {
          result = true;
        } else {
          result = false;
          return result;
        }
      }
    } else if (typeof Value2 === typeof []) {
      for (let x = 0; x < Value2.length; x++) {
        if (Value1 === Value2[x]) {
          result = true;
        } else {
          result = false;
          return result;
        }
      }
    }
  } else {
    //Otherwise if Value1 or Value 2 is undefined, they are unequal
    result = false;
  }

  return result;
}

const findKeyByValue = function(Object, Value) {
  //loop through the given Object for a Value

  let trueValue = "";
  let falseValue = undefined;

  for (let Ob in Object) {
    
    if (Object[Ob] === Value) {
      trueValue = Ob;
      //console.log(`${Ob}: ${Value}`);
      return trueValue;
    }

  }

 
  //console.log(undefined);
  return falseValue;

};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};


//console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
//console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
//console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));

//assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
//assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), ["sci_fi"]);


module.exports = findKeyByValue;
