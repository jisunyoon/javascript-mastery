# Week 4 실습 문제

## 01. Debounce

```javascript
const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

// 테스트
const handleSearch = debounce((value) => {
  console.log('검색:', value);
}, 300);

handleSearch('a');
handleSearch('ab');
handleSearch('abc'); // 300ms 후 실행
```

## 02. Throttle

```javascript
const throttle = (fn, delay) => {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
};

// 테스트
window.addEventListener('scroll', throttle(() => {
  console.log('스크롤!');
}, 1000));
```

## 03. Deep Clone

```javascript
const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (obj instanceof Date) {
    return new Date(obj);
  }
  
  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }
  
  const cloned = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
};

// 테스트
const original = {
  name: '철수',
  hobbies: ['독서', '운동'],
  address: { city: '서울' }
};

const cloned = deepClone(original);
cloned.hobbies.push('영화');
console.log(original.hobbies); // ['독서', '운동']
```

## 04. Get (lodash _.get)

```javascript
const get = (obj, path, defaultValue) => {
  const keys = path.split('.');
  let result = obj;
  
  for (const key of keys) {
    result = result?.[key];
    if (result === undefined) {
      return defaultValue;
    }
  }
  
  return result;
};

// 테스트
const user = {
  profile: {
    address: {
      city: 'Seoul'
    }
  }
};

console.log(get(user, 'profile.address.city')); // 'Seoul'
console.log(get(user, 'profile.age', 0)); // 0
```

## 05-07 추가 문제

- **isEqual**: 두 객체 깊은 비교
- **pick**: 특정 속성만 선택
- **sleep**: async/await 지연

```javascript
// pick 예시
pick({ a: 1, b: 2, c: 3 }, ['a', 'c']) // { a: 1, c: 3 }

// sleep 예시
await sleep(1000); // 1초 대기
```
