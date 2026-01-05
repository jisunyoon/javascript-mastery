# 03. 파이프라인 함수 (Pipe Functions)

## 🎯 문제 설명

여러 함수를 순차적으로 실행하는 `pipe` 함수를 작성하세요.

## 📝 요구사항

```javascript
const pipe = (...fns) => (x) => {
  // 여기에 코드를 작성하세요
};
```

### 입력
- `fns`: 실행할 함수들 (가변 인자)
- `x`: 초기값

### 출력
- 모든 함수를 순차 실행한 최종 결과

## 🧪 테스트 케이스

```javascript
// Test 1: 기본 사용
const add1 = x => x + 1;
const multiply2 = x => x * 2;
const subtract3 = x => x - 3;

const calculate = pipe(add1, multiply2, subtract3);
console.log(calculate(5)); // (5 + 1) * 2 - 3 = 9

// Test 2: 문자열 변환
const toUpperCase = str => str.toUpperCase();
const addExclamation = str => str + '!';
const repeat = str => str.repeat(2);

const transform = pipe(toUpperCase, addExclamation, repeat);
console.log(transform('hello')); // "HELLO!HELLO!"

// Test 3: 배열 처리
const double = arr => arr.map(x => x * 2);
const filterEven = arr => arr.filter(x => x % 2 === 0);
const sum = arr => arr.reduce((a, b) => a + b, 0);

const process = pipe(double, filterEven, sum);
console.log(process([1, 2, 3, 4])); // [2,4,6,8] → [2,4,6,8] → 20
```

## 💡 힌트

<details>
<summary>힌트 1 (클릭)</summary>

`reduce()`를 사용해서 이전 함수의 결과를 다음 함수의 입력으로 전달하세요.

</details>

<details>
<summary>힌트 2 (클릭)</summary>

```javascript
const pipe = (...fns) => (x) => {
  return fns.reduce((acc, fn) => {
    // acc: 이전 함수의 결과
    // fn: 현재 실행할 함수
  }, x); // 초기값은 x
};
```

</details>

## 🎓 학습 포인트

- 고차 함수 (함수를 반환하는 함수)
- `reduce()`로 함수 합성
- 함수형 프로그래밍 패턴
- 가변 인자 (rest parameter)

## 🚀 도전 과제

1. **compose 함수**: pipe의 반대 (오른쪽부터 실행)
   ```javascript
   const compose = (...fns) => (x) => {
     // 여기에 코드 작성
   };
   ```

2. **비동기 pipe**: async 함수 지원
   ```javascript
   const asyncPipe = (...fns) => async (x) => {
     // 여기에 코드 작성
   };
   ```

3. **에러 핸들링**: 중간에 에러나면 처리
