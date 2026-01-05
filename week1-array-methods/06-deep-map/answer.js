// 깊은 맵핑
const deepMap = (arr, fn) => {
  return arr.map(item => {
    return Array.isArray(item) ? deepMap(item, fn) : fn(item);
  });
};

console.log(deepMap([1, [2, [3, 4]], 5], x => x * 2));

module.exports = deepMap;
