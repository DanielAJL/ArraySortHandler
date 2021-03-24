console.clear();

import ArraySortHandler from './modules/ArraySortHandler.js';

const array = ['0', 0, 'a', 3, 'dde', 'dd', 0, 'e', 'g', 'xgoeZs', 'Z', 9, '2', 'dAsd', 'z', 'Z'];

const sortedArray = (arr, order, filter) => {
  let handler = new ArraySortHandler(arr);
  return handler(order, filter);
};

console.log('original array:', array);
console.log('sortedArray:', sortedArray(array, 'asc', 'number'));
