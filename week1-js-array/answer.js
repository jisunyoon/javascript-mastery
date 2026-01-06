/**
 * Week 1 (월): JS 배열 메서드 - 정답
 */

const flatten = (arr) => {
  return arr.reduce((acc, val) => {
    return Array.isArray(val) ? [...acc, ...flatten(val)] : [...acc, val];
  }, []);
};

const groupBy = (arr, key) => {
  return arr.reduce((acc, item) => {
    const groupKey = typeof key === 'function' ? key(item) : item[key];
    (acc[groupKey] = acc[groupKey] || []).push(item);
    return acc;
  }, {});
};

const pipe = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

const uniqueBy = (arr, key) => {
  const seen = new Set();
  return arr.filter(item => {
    const value = item[key];
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  });
};

const chunk = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const deepMap = (arr, fn) => {
  return arr.map(item => Array.isArray(item) ? deepMap(item, fn) : fn(item));
};

const cartesian = (arr1, arr2) => {
  return arr1.flatMap(a => arr2.map(b => [a, b]));
};

// ========== 테스트 ==========
console.log('01. flatten:', flatten([1, [2, [3, [4]]]]));
console.log('02. groupBy:', groupBy([{name:'철수',age:25},{name:'영희',age:28},{name:'민수',age:25}], 'age'));
console.log('03. pipe:', pipe(x => x + 1, x => x * 2)(5));
console.log('04. uniqueBy:', uniqueBy([{id:1,name:'철수'},{id:2,name:'영희'},{id:1,name:'철수2'}], 'id'));
console.log('05. chunk:', chunk([1,2,3,4,5,6,7,8], 3));
console.log('06. deepMap:', deepMap([1, [2, [3, 4]], 5], x => x * 2));
console.log('07. cartesian:', cartesian([1, 2], ['a', 'b']));
