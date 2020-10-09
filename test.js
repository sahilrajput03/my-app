const myArray = [1, 2, 3, 4, [5, 6], [7, [8, 9, 10]]];

const flattenArray = array => {
  return array.reduce((acc, item) => {
    return Array.isArray(item) ? [...acc, ...flattenArray(item)] : [...acc, item];
    // return item instanceof Array ? [...acc, ...flattenArray(item)] : [...acc, item];
    // Both works fine.
  }, []);
};

console.log(flattenArray(myArray));
