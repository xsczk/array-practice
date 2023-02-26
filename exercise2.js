// Find 2 elements with the greatest sum in an array
// Example: [1,7,9,2,5,3,8] => [9,8]

const arr = [1, 7, 9, 2, 5, 3, 8];

const greatestSum = (arr) => {
  arr.sort();
  return arr.slice(arr.length - 2, arr.length);
};

console.log(greatestSum(arr));
