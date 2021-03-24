console.clear();

import ArraySortHandler from './modules/ArraySortHandler.js';

const array = ['0', 0, 'a', 3, 'dde', 'dd', 0, 'e', 'g', 'xgoeZs', 'Z', 9, '2', 'dAsd', 'z', 'Z'];

const objArray = [
  { name: 'Daniel', age: 23 },
  { name: 'James', age: 7 },
  { name: 'Keith', age: '44' },
  { name: 'Arjen', age: 79 },
];

// const sortedArray = (arr, order, filter) => {
//   let handler = new ArraySortHandler(arr);
//   return handler(order, filter);
// };

// console.log('original array:', array);
// console.log('sortedArray:', sortedArray(array, 'asc', 'number'));

const sortedObj = (arr, order, filter, key) => {
  let handler = new ArraySortHandler(arr);
  return handler(order, filter, key);
};

console.log('original array of objects:', objArray);
console.log('sortedObj:', sortedObj(objArray, 'desc', 'number', 'age'));
