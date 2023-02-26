// Write a function with 2 input parameters (each parameter is an array). This function returns an array of the same elements in two arrays;

// Example: 	array1 = [1,2,3,4,5,6];
// 			array2 = [3,4,8,9,12];
// 			=> [3,4]

const array1 = [1, 2, 3, 4, 5, 6];

const array2 = [3, 4, 8, 9, 12];

const sameItems = (arr1, arr2) => {
  const common = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
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

console.log(sameItems(array1, array2));
