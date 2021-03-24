export default function ArraySortHandler(arr) {
  // order options will be 'asc' and 'desc' for now.
  // filter options will be 'number' and 'string' for now
  // key option will hold the key value to sort
  return function (order = '', filter = '', key = '') {
    if (!arr) return;

    // filteredArr contains values that match the filter data type.
    let filteredArr =
      typeof arr[0] === 'object'
        ? arr.filter((entry) => typeof entry[key] === filter)
        : arr.filter((entry) => typeof entry === filter);

    console.log('filteredArr', filteredArr);

    let sortedArr =
      order === 'desc'
        ? filteredArr.sort((a, b) => {
            if (typeof a === 'number') {
              return b - a;
            } else {
              return a.localeCompare(b);
            }
          })
        : filteredArr.sort((a, b) => {
            if (typeof a === 'number') {
              return a - b;
            } else {
              return b.localeCompare(a);
            }
          });
    return sortedArr;
  };
}
