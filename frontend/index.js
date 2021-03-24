console.clear();

import ArraySortHandler from './modules/ArraySortHandler.js';

const array = ['0', 0, 'a', 3, 'dde', 'dd', 0, 'e', 'g', 'xgoeZs', 'Z', 9, '2', 'dAsd', 'z', 'Z'];

const objArray = [
  { name: 'Daniel', age: 23 },
  { name: 'James', age: 7 },
  { name: 'Keith', age: '44' },
  { name: 'Arjen', age: 79 },
];

// Example: sort array of values by value type.
const sortedArray = (arr, order, filter) => {
  let handler = new ArraySortHandler(arr);
  return handler(order, filter);
};

// Example: sort array of objects by key values and value type.
const sortedObj = (arr, order, filter, key) => {
  let handler = new ArraySortHandler(arr);
  return handler(order, filter, key);
};

console.log('original array:', array);
console.log('sortedArray:', sortedArray(array, 'asc', 'number'));
console.log('sortedArray:', sortedArray(array, 'desc', 'string'));

console.log('original array of objects:', objArray);
console.log('sortedObj - descending by name:', sortedObj(objArray, 'desc', 'string', 'name'));
console.log('sortedObj - ascending by age:', sortedObj(objArray, 'asc', 'number', 'age'));
