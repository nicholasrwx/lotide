const middle = function (Array) {
  let newArray = [];

  if (Array.length <= 2) {
    return newArray;
  } else if (Array.length % 2 === 0) {
    let x = Array.length / 2;
    newArray.push(Array[x - 1]);
    newArray.push(Array[x]);
  } else {
    let x = (Array.length - 1) / 2;
    newArray.push(Array[x]);
  }

  return newArray;
};

module.exports = middle;
