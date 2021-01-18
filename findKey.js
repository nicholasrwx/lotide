const assertEqual = require("./assertEqual");

const findKey = function (object, callback) {
  for (let key in object) {
    if (callback(key)) {
      return object[key];
    }
  }
  return undefined;
};

const list = {
  Can: "Coca-Cola",
  Mug: "Tea and Honey",
  Cup: "Coffee Cup",
  Glass: "Water",
  Wall: "Guitars",
};

const listRezzults = findKey(list, (key) => key === "Wall");

console.log(listRezzults);

assertEqual(listRezzults, 'Guitars') //result equals expected output -> true
assertEqual(listRezzults, ['Guitars'] ) //result equals array -> false
assertEqual(listRezzults, list['Wall']) // result equals obj.key value -> true
assertEqual(findKey(list, (key) => key === 'Roof'), undefined) //if missing key, result returns undefined -> true 
