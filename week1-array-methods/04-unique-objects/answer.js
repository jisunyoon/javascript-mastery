// ✅ 방법 1: Set + map
const uniqueBy = (arr, key) => {
  const seen = new Set();
  return arr.filter(item => {
    const value = item[key];
    if (seen.has(value)) {
      return false;
    }
    seen.add(value);
    return true;
  });
};

// ✅ 방법 2: findIndex
const uniqueBy2 = (arr, key) => {
  return arr.filter((item, index) => {
    return arr.findIndex(obj => obj[key] === item[key]) === index;
  });
};

// ✅ 방법 3: reduce + Map
const uniqueBy3 = (arr, key) => {
  const map = new Map();
  arr.forEach(item => {
    if (!map.has(item[key])) {
      map.set(item[key], item);
    }
  });
  return Array.from(map.values());
};

// 테스트
const users = [
  { id: 1, name: '철수' },
  { id: 2, name: '영희' },
  { id: 1, name: '철수2' },
  { id: 3, name: '민수' }
];

console.log(uniqueBy(users, 'id'));

module.exports = uniqueBy;
