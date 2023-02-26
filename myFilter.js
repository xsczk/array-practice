// Write 3 methods myMap, myFilter, myReduce (suggestion: use Array.prototype, "this" keyword, and for loop).
// 	3 these methods have similar in use and usage as map, filter, reduce of array in JS

Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const result = words.myFilter((word) => word.length > 6);
const result2 = words.filter((word) => word.length > 6);

console.log(result);
console.log(result2);
