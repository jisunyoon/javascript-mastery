/**
 * Week 3 (월): JS 클로저 - 정답
 */

const createCounter = () => {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count
  };
};

const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...next) => curried(...args, ...next);
  };
};

const once = (fn) => {
  let called = false, result;
  return (...args) => {
    if (!called) { called = true; result = fn(...args); }
    return result;
  };
};

const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

const partial = (fn, ...preset) => (...later) => fn(...preset, ...later);

const createQueue = () => {
  const items = [];
  return {
    enqueue: (item) => items.push(item),
    dequeue: () => items.shift(),
    size: () => items.length,
    isEmpty: () => items.length === 0
  };
};

// 테스트
console.log('=== createCounter ===');
const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1

console.log('\n=== memoize ===');
const slow = memoize((n) => { console.log('계산'); return n * 2; });
console.log(slow(5));
console.log(slow(5)); // 캐시

console.log('\n=== curry ===');
const sum = (a, b, c) => a + b + c;
console.log(curry(sum)(1)(2)(3)); // 6

console.log('\n=== once ===');
const init = once(() => { console.log('init!'); return 'done'; });
console.log(init());
console.log(init());

console.log('\n=== compose ===');
console.log(compose(x => x + 1, x => x * 2)(5)); // 11

console.log('\n=== partial ===');
const add = (a, b, c) => a + b + c;
console.log(partial(add, 1)(2, 3)); // 6

console.log('\n=== createQueue ===');
const q = createQueue();
q.enqueue(1);
q.enqueue(2);
console.log(q.dequeue()); // 1
console.log(q.size());    // 1
