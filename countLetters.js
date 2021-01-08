

const assertEqual = function(actual, expected) {
  let msg1 = `${actual} === ${expected}`;
  let msg2 = `${actual} !== ${expected}`;

  if (actual === expected) {
    console.log(`Assertion passed: ${msg1}`);
  }
  console.assert(actual === expected, `${msg2}`);
};

const countLetters = function(string) {
  let newObject = {};

  for (let letter of string) {
    if (newObject[letter]) {
      newObject[letter]++;
    } else if (
      !newObject[letter] &&
      letter != "'" &&
      letter != "," &&
      letter != "." &&
      letter != " "
    ) {
      newObject[letter] = 1;
    } else {
      continue;
    }
  }
  return newObject;
};

let string = "I'm always up late, well passed 8 p.m.";

const result1 = countLetters(string);
console.log(result1);

assertEqual(result1["a"], 4); //pass
assertEqual(result1["l"], 4); //pass
assertEqual(result1["8"], 1); //pass
assertEqual(result1[" "], undefined); //pass
assertEqual(result1[","], undefined); //pass
assertEqual(result1["."], undefined); //pass
assertEqual(result1["'"], undefined); //pass
