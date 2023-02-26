// Get a new array of duplicate elements in 2 arrays, each element appears exactly once in the new array
// Example: 	const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
// 			const arr2 = [3, 5, 9, 10, 88];
// 			=> [3,5,9]

const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const arr2 = [3, 5, 9, 10, 88];

const sameItems = (arr1, arr2) => {
  const common = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  console.log(arr1);
  console.log(arr2);
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      common.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return common;
};


console.log(sameItems(arr1, arr2));
