# Week 3 실습 문제

## 01. 카운터 (createCounter)

```javascript
const createCounter = () => {
  // 클로저를 활용해서 private 변수 만들기
};

// 사용 예시
const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getValue());  // 1
// counter.count 접근 불가능해야 함
```

## 02. 메모이제이션 (memoize)

```javascript
const memoize = (fn) => {
  // 한 번 계산한 결과는 캐싱
};

// 테스트
const slowFunction = (num) => {
  console.log('계산 중...');
  return num * 2;
};

const memoized = memoize(slowFunction);
memoized(5); // "계산 중..." → 10
memoized(5); // 10 (캐시에서 바로)
```

## 03. 커링 (curry)

```javascript
const curry = (fn) => {
  // f(a, b, c) → f(a)(b)(c)로 변환
};

// 테스트
const sum = (a, b, c) => a + b + c;
const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // 6
```

## 💡 정답

### 01 답안
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

### 02 답안
```javascript
const memoize = (fn) => {
  const cache = new Map();
  
  return (...args) => {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};
```

### 03 답안
```javascript
const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
};
```
