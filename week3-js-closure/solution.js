/**
 * Week 3 (월): JS 클로저 - solution.js
 */

const createCounter = () => {
  let count = 0;
  const increment = () => {
    count++;
    return count;
  }

  const decrement = () => {
    count--;
    return count;
  }

  const getValue = () => {
    return count;
  }

  return {increment, decrement, getValue}
};

const memoize = (fn) => {
  let cache = {};
  return (arg) => {
    if(cache[arg] !== undefined){
      cache[arg]
    }
    const result = fn(arg);
    cache[arg] = result;
    return result;
  }
};

const curry = (fn) => {
  return function curried (...args){
    if(arg.length >= fn.length){
      return fn(...args)
    }else{
      return (...nextArgs) => curried(...args, ...nextArgs);
    }
  }
};

const once = (fn) => {
  let called = false;
  let result;

  return(...args) => {
    if(!called){
      called = true;
      result = fn(...args);
    }
    return result;
  }
};

const compose = (...fns) => {
  return (x) => fns.reduceRight((acc, fn) => fn(acc), x);
};

const partial = (fn, ...preset) => {
  return (...laterArgs) => {
    return fn(...preset, ...laterArgs);
  }
};

const createQueue = () => {
  const items = [];
  return {
    enqueue: (item) => items.push(item),
    dequeue: () => items.shift(),
    size: () => items.length,
    isEmpty: () => items.length === 0
  }
};

// 테스트
console.log('=== createCounter ===');
const counter = createCounter();
console.log(counter?.increment?.());
console.log(counter?.getValue?.());
