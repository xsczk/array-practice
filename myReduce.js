// Write 3 methods myMap, myFilter, myReduce (suggestion: use Array.prototype, "this" keyword, and for loop).
// 	3 these methods have similar in use and usage as map, filter, reduce of array in JS

Array.prototype.myReduce = function (callback, initialValue) {
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    initialValue = this[0];
  }
  for (i; i < this.length; i++) {
    initialValue = callback(initialValue, this[i], i, this);
  }
  return initialValue;
};

const array1 = [1, 2, 3, 4, 5];

const sumWithInitial = array1.myReduce((accumulator, currentValue) => accumulator + currentValue, 10);

console.log(sumWithInitial);
