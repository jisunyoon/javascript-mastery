# Week 4 (월): JS 유틸 함수 🛠️

---

## 01. debounce

```javascript
const debounce = (fn, delay) => {
  // 마지막 호출 후 delay만큼 대기 후 실행
};

const search = debounce((q) => console.log('검색:', q), 300);
search('a');   // 취소
search('ab');  // 취소
search('abc'); // 300ms 후 실행
```

<details>
<summary>✅ 정답</summary>

```javascript
const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};
```
</details>

---

## 02. throttle

```javascript
const throttle = (fn, delay) => {
  // delay 동안 최대 1번만 실행
};
```

<details>
<summary>✅ 정답</summary>

```javascript
const throttle = (fn, delay) => {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= delay) {
      last = now;
      fn(...args);
    }
  };
};
```
</details>

---

## 03. deepClone

```javascript
const deepClone = (obj) => {
  // 깊은 복사
};

const a = { x: 1, y: { z: 2 } };
const b = deepClone(a);
b.y.z = 999;
console.log(a.y.z); // 2 (변경 안됨)
```

<details>
<summary>✅ 정답</summary>

```javascript
const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);
  const cloned = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) cloned[key] = deepClone(obj[key]);
  }
  return cloned;
};
```
</details>

---

## 04. get (안전한 접근)

```javascript
const get = (obj, path, defaultValue) => {
  // 'a.b.c' 경로로 안전하게 접근
};

get({ a: { b: { c: 1 } } }, 'a.b.c');     // 1
get({ a: { b: 1 } }, 'a.b.c.d', 'N/A');   // 'N/A'
```

<details>
<summary>✅ 정답</summary>

```javascript
const get = (obj, path, defaultValue) => {
  const keys = path.split('.');
  let result = obj;
  for (const key of keys) {
    result = result?.[key];
    if (result === undefined) return defaultValue;
  }
  return result;
};
```
</details>

---

## 05. isEqual (깊은 비교)

```javascript
const isEqual = (a, b) => {
  // 깊게 비교
};

isEqual({ x: 1 }, { x: 1 });           // true
isEqual({ x: [1, 2] }, { x: [1, 2] }); // true
isEqual({ x: 1 }, { x: 2 });           // false
```

<details>
<summary>✅ 정답</summary>

```javascript
const isEqual = (a, b) => {
  if (a === b) return true;
  if (typeof a !== 'object' || typeof b !== 'object') return false;
  if (a === null || b === null) return false;
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  return keysA.every(key => isEqual(a[key], b[key]));
};
```
</details>

---

## 06. pick

```javascript
const pick = (obj, keys) => {
  // 특정 키만 선택
};

pick({ a: 1, b: 2, c: 3 }, ['a', 'c']); // { a: 1, c: 3 }
```

<details>
<summary>✅ 정답</summary>

```javascript
const pick = (obj, keys) => {
  return keys.reduce((acc, key) => {
    if (key in obj) acc[key] = obj[key];
    return acc;
  }, {});
};
```
</details>

---

## 07. omit

```javascript
const omit = (obj, keys) => {
  // 특정 키 제외
};

omit({ a: 1, b: 2, c: 3 }, ['b']); // { a: 1, c: 3 }
```

<details>
<summary>✅ 정답</summary>

```javascript
const omit = (obj, keys) => {
  const set = new Set(keys);
  return Object.fromEntries(
    Object.entries(obj).filter(([k]) => !set.has(k))
  );
};
```
</details>
