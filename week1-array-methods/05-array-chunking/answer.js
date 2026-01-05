// ✅ 방법 1: slice + 반복문
const chunk = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

// ✅ 방법 2: reduce
const chunk2 = (arr, size) => {
  return arr.reduce((acc, _, i) => {
    if (i % size === 0) {
      acc.push(arr.slice(i, i + size));
    }
    return acc;
  }, []);
};

// 테스트
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chunk(['a', 'b', 'c', 'd'], 2));

module.exports = chunk;
