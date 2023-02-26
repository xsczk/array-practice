// Write 3 methods myMap, myFilter, myReduce (suggestion: use Array.prototype, "this" keyword, and for loop).
// 	3 these methods have similar in use and usage as map, filter, reduce of array in JS

Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

const array1 = [1, 4, 9, 16];
const map1 = array1.myMap((x, i) => x * 2 + ` ${i} hahaha`);
const map2 = array1.map((x, i) => x * 2 + ` ${i} hahaha`);

console.log(map1);
console.log(map2);
