/**
 * Week 4: JS 유틸 - 정답
 */

const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

const throttle = (fn, delay) => {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= delay) { last = now; fn(...args); }
  };
};

const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);
  const cloned = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) cloned[key] = deepClone(obj[key]);
  }
  return cloned;
};

const get = (obj, path, def) => {
  let result = obj;
  for (const key of path.split('.')) {
    result = result?.[key];
    if (result === undefined) return def;
  }
  return result;
};

const isEqual = (a, b) => {
  if (a === b) return true;
  if (typeof a !== 'object' || typeof b !== 'object') return false;
  if (a === null || b === null) return false;
  const keysA = Object.keys(a), keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  return keysA.every(key => isEqual(a[key], b[key]));
};

const pick = (obj, keys) => keys.reduce((a, k) => { if (k in obj) a[k] = obj[k]; return a; }, {});

const omit = (obj, keys) => {
  const set = new Set(keys);
  return Object.fromEntries(Object.entries(obj).filter(([k]) => !set.has(k)));
};

// 테스트
console.log('deepClone:', deepClone({ a: { b: 1 } }));
console.log('get:', get({ a: { b: { c: 1 } } }, 'a.b.c'));
console.log('isEqual:', isEqual({ x: 1 }, { x: 1 }));
console.log('pick:', pick({ a: 1, b: 2, c: 3 }, ['a', 'c']));
console.log('omit:', omit({ a: 1, b: 2, c: 3 }, ['b']));
