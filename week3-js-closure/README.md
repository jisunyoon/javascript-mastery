# Week 3 (월): JS 클로저 & 고차함수 🎭

---

## 01. createCounter

```javascript
const createCounter = () => {
  // 여기에 코드 작성
};

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.getValue();  // 1
```

<details>
<summary>✅ 정답</summary>

```javascript
const createCounter = () => {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count
  };
};
```
</details>

---

## 02. memoize

```javascript
const memoize = (fn) => {
  // 여기에 코드 작성
};

const slowFn = (n) => { console.log('계산중'); return n * 2; };
const fast = memoize(slowFn);
fast(5); // "계산중" 10
fast(5); // 10 (캐시)
```

<details>
<summary>✅ 정답</summary>

```javascript
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
```
</details>

---

## 03. curry

```javascript
const curry = (fn) => {
  // 여기에 코드 작성
};

const sum = (a, b, c) => a + b + c;
curry(sum)(1)(2)(3); // 6
```

<details>
<summary>✅ 정답</summary>

```javascript
const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...next) => curried(...args, ...next);
  };
};
```
</details>

---

## 04. once

```javascript
const once = (fn) => {
  // 여기에 코드 작성
};

const init = once(() => { console.log('init!'); return 'done'; });
init(); // "init!" "done"
init(); // "done" (실행 안됨)
```

<details>
<summary>✅ 정답</summary>

```javascript
const once = (fn) => {
  let called = false, result;
  return (...args) => {
    if (!called) { called = true; result = fn(...args); }
    return result;
  };
};
```
</details>

---

## 05. compose

```javascript
const compose = (...fns) => (x) => {
  // 여기에 코드 작성 (오른쪽부터 실행)
};

compose(x => x + 1, x => x * 2)(5); // 11
```

<details>
<summary>✅ 정답</summary>

```javascript
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);
```
</details>

---

## 06. partial

```javascript
const partial = (fn, ...preset) => {
  // 여기에 코드 작성
};

const add = (a, b, c) => a + b + c;
partial(add, 1)(2, 3); // 6
```

<details>
<summary>✅ 정답</summary>

```javascript
const partial = (fn, ...preset) => (...later) => fn(...preset, ...later);
```
</details>

---

## 07. createQueue

```javascript
const createQueue = () => {
  // 여기에 코드 작성
};

const q = createQueue();
q.enqueue(1);
q.enqueue(2);
q.dequeue(); // 1
q.size();    // 1
```

<details>
<summary>✅ 정답</summary>

```javascript
const createQueue = () => {
  const items = [];
  return {
    enqueue: (item) => items.push(item),
    dequeue: () => items.shift(),
    size: () => items.length,
    isEmpty: () => items.length === 0
  };
};
```
</details>
