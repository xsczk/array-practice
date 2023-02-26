// Find pairs of elements whose sum is equal to a given number
// Example: [1,7,9,2,5,3,8], sum = 10 => [1,9] ; [7,3]; [2,8]

const arr = [1, 7, 9, 2, 5, 3, 8];

const pairsArray = (arr, sum) => {
  let map = {};
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      result.push([map[arr[i]], arr[i]]);
    } else {
      map[sum - arr[i]] = arr[i];
    }
  }
  return result;
};

console.log(pairsArray(arr, 10));
