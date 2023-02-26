// Get a new array from the given array so that the elements appear only once (implement 2 ways: using Set, not using Set)
// Example: [1,2,3,1,2,3,4,5,6,4] => [1,2,3,4,5,6]

const arr = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4];

// solution 1: using Set

const uniqueValue = new Set(arr);
console.log([...uniqueValue]);

// solution 2: not using Set

const uniqueValue2 = (arr) => {
  const map = {};
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = arr[i];
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(uniqueValue2(arr));
