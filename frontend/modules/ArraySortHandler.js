export default function ArraySortHandler(arr) {
  // order options will be 'asc' and 'desc' for now.
  // filter options will be 'number' and 'string' for now
  return function (order = '', filter = '') {
    if (!order) {
      console.error('ERROR: no order arg passed');
      return arr;
    }

    // tempArr contains values that match the filter data type.
    let tempArr = arr.filter((entry) => typeof entry === filter);

    let sortedArr =
      order === 'desc'
        ? tempArr.sort((a, b) => {
            if (typeof a === 'number') {
              return b - a;
            } else {
              return a.localeCompare(b);
            }
          })
        : tempArr.sort((a, b) => {
            if (typeof a === 'number') {
              return a - b;
            } else {
              return b.localeCompare(a);
            }
          });

    return sortedArr;
  };
}
