const tail = function (array) {
  let newarray = [];
  for (let x = 1; x < array.length; x++) {
    newarray.push(array[x]);
  }
  return newarray;
};
module.exports = tail;
