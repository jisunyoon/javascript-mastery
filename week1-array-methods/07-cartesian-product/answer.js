// 데카르트 곱
const cartesianProduct = (arr1, arr2) => {
  return arr1.flatMap(a => arr2.map(b => [a, b]));
};

// 또는 reduce 버전
const cartesianProduct2 = (arr1, arr2) => {
  return arr1.reduce((acc, a) => {
    return acc.concat(arr2.map(b => [a, b]));
  }, []);
};

console.log(cartesianProduct([1, 2], ['a', 'b']));

module.exports = cartesianProduct;
