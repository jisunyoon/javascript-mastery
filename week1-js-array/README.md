# Week 1 (월): JS 배열 메서드 🎯

---

## 01. flatten (중첩 배열 평탄화)

```javascript
const flatten = (arr) => {
  // 여기에 코드 작성
};

// 테스트
flatten([1, [2, 3], 4]);           // [1, 2, 3, 4]
flatten([1, [2, [3, [4]]]]); // [1, 2, 3, 4]
```

<details>
<summary>✅ 정답</summary>

```javascript
const flatten = (arr) => {
  return arr.reduce((acc, val) => {
    return Array.isArray(val)
      ? [...acc, ...flatten(val)]
      : [...acc, val];
  }, []);
};
```
</details>

---

## 02. groupBy (객체 배열 그룹화)

```javascript
const groupBy = (arr, key) => {
  // 여기에 코드 작성
};

// 테스트
const people = [
  { name: '철수', age: 25 },
  { name: '영희', age: 28 },
  { name: '민수', age: 25 }
];
groupBy(people, 'age');
// { 25: [...], 28: [...] }
```

<details>
<summary>✅ 정답</summary>

```javascript
const groupBy = (arr, key) => {
  return arr.reduce((acc, item) => {
    const groupKey = typeof key === 'function' ? key(item) : item[key];
    (acc[groupKey] = acc[groupKey] || []).push(item);
    return acc;
  }, {});
};
```
</details>

---

## 03. pipe (함수 합성)

```javascript
const pipe = (...fns) => (x) => {
  // 여기에 코드 작성
};

// 테스트
const add1 = x => x + 1;
const multiply2 = x => x * 2;
pipe(add1, multiply2)(5);  // 12
```

<details>
<summary>✅ 정답</summary>

```javascript
const pipe = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);
```
</details>

---

## 04. uniqueBy (중복 제거)

```javascript
const uniqueBy = (arr, key) => {
  // 여기에 코드 작성
};

// 테스트
const users = [
  { id: 1, name: '철수' },
  { id: 2, name: '영희' },
  { id: 1, name: '철수2' }
];
uniqueBy(users, 'id');  // [{ id: 1, ... }, { id: 2, ... }]
```

<details>
<summary>✅ 정답</summary>

```javascript
const uniqueBy = (arr, key) => {
  const seen = new Set();
  return arr.filter(item => {
    const value = item[key];
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  });
};
```
</details>

---

## 05. chunk (배열 나누기)

```javascript
const chunk = (arr, size) => {
  // 여기에 코드 작성
};

// 테스트
chunk([1,2,3,4,5,6,7,8], 3);  // [[1,2,3], [4,5,6], [7,8]]
```

<details>
<summary>✅ 정답</summary>

```javascript
const chunk = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};
```
</details>

---

## 06. deepMap (깊은 맵핑)

```javascript
const deepMap = (arr, fn) => {
  // 여기에 코드 작성
};

// 테스트
deepMap([1, [2, [3, 4]], 5], x => x * 2);  // [2, [4, [6, 8]], 10]
```

<details>
<summary>✅ 정답</summary>

```javascript
const deepMap = (arr, fn) => {
  return arr.map(item => 
    Array.isArray(item) ? deepMap(item, fn) : fn(item)
  );
};
```
</details>

---

## 07. cartesian (데카르트 곱)

```javascript
const cartesian = (arr1, arr2) => {
  // 여기에 코드 작성
};

// 테스트
cartesian([1, 2], ['a', 'b']);
// [[1,'a'], [1,'b'], [2,'a'], [2,'b']]
```

<details>
<summary>✅ 정답</summary>

```javascript
const cartesian = (arr1, arr2) => {
  return arr1.flatMap(a => arr2.map(b => [a, b]));
};
```
</details>
