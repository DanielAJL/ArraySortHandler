export default function ArraySortHandler(arr) {
  // order options will be 'asc' and 'desc' for now.
  // filter options will be 'number' and 'string' for now
  // key option will hold the key value to sort
  return function (order = '', filter = '', key = '') {
    if (!arr) return;

    let filteredArr =
      typeof arr[0] === 'object'
        ? // filter out invalid values
          arr.filter((entry) => typeof entry[key] === filter)
        : arr.filter((entry) => typeof entry === filter);

    let sortedArr =
      order === 'desc'
        ? filteredArr.sort((a, b) => {
            if (typeof a === 'object') {
              if (typeof a[key] === 'number') {
                return b[key] - a[key];
              } else {
                return b[key].localeCompare(a[key]);
              }
            }
            if (typeof a === 'number') {
              return b - a;
            } else {
              return b.localeCompare(a);
            }
          })
        : filteredArr.sort((a, b) => {
            if (typeof b === 'object') {
              if (typeof b[key] === 'number') {
                return a[key] - b[key];
              } else {
                return a[key].localeCompare(b[key]);
              }
            }
            if (typeof b === 'number') {
              return a - b;
            } else {
              return a.localeCompare(b);
            }
          });
    return sortedArr;
  };
}
