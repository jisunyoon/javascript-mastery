/**
 * 여러 함수를 순차 실행하는 파이프라인
 * @param  {...Function} fns - 실행할 함수들
 * @returns {Function} 합성된 함수
 */

// ✅ 방법 1: reduce (가장 일반적)
const pipe = (...fns) => (x) => {
  return fns.reduce((acc, fn) => fn(acc), x);
};

// ✅ 방법 2: for...of 사용
const pipe2 = (...fns) => (x) => {
  let result = x;
  for (const fn of fns) {
    result = fn(result);
  }
  return result;
};

// 🚀 보너스 1: compose (오른쪽부터 실행)
const compose = (...fns) => (x) => {
  return fns.reduceRight((acc, fn) => fn(acc), x);
};

// 🚀 보너스 2: 비동기 pipe
const asyncPipe = (...fns) => async (x) => {
  let result = x;
  for (const fn of fns) {
    result = await fn(result);
  }
  return result;
};

// 🚀 보너스 3: 에러 핸들링
const safePipe = (...fns) => (x) => {
  try {
    return fns.reduce((acc, fn) => fn(acc), x);
  } catch (error) {
    console.error('Pipe 실행 중 에러:', error);
    return x; // 원래 값 반환
  }
};

// 테스트
console.log('=== 기본 pipe ===');
const add1 = x => x + 1;
const multiply2 = x => x * 2;
const subtract3 = x => x - 3;

const calculate = pipe(add1, multiply2, subtract3);
console.log(calculate(5)); // (5 + 1) * 2 - 3 = 9

console.log('\n=== 문자열 변환 ===');
const toUpperCase = str => str.toUpperCase();
const addExclamation = str => str + '!';
const repeat = str => str.repeat(2);

const transform = pipe(toUpperCase, addExclamation, repeat);
console.log(transform('hello')); // "HELLO!HELLO!"

console.log('\n=== compose (역순) ===');
const reverseCalculate = compose(subtract3, multiply2, add1);
console.log(reverseCalculate(5)); // ((5 - 3) * 2) + 1 = 5

console.log('\n=== 비동기 pipe ===');
const delay = ms => x => new Promise(resolve => {
  setTimeout(() => {
    console.log(`${ms}ms 대기 후: ${x}`);
    resolve(x);
  }, ms);
});

const asyncTransform = asyncPipe(
  delay(100),
  x => x * 2,
  delay(100),
  x => x + 10
);

asyncTransform(5).then(result => {
  console.log('최종 결과:', result); // 20
});

/*
📚 핵심 개념 정리

1. 함수 합성 (Function Composition)
   - 여러 함수를 하나로 합치는 기법
   - f(g(h(x))) → pipe(h, g, f)(x)

2. reduce의 활용
   - 이전 함수의 결과(acc)를 다음 함수(fn)의 입력으로
   - 초기값(x)부터 시작해서 순차 실행

3. 고차 함수 (Higher-Order Function)
   - 함수를 인자로 받음: ...fns
   - 함수를 반환함: (x) => ...

4. 커링 (Currying)
   - pipe(...fns)는 함수 목록을 받음
   - 반환된 함수는 실제 값(x)을 받음
   - 두 단계로 나눠서 실행

⚡ pipe vs compose
- pipe: 왼쪽 → 오른쪽 (읽기 편함)
  pipe(a, b, c)(x) === c(b(a(x)))
  
- compose: 오른쪽 → 왼쪽 (수학적 표기)
  compose(a, b, c)(x) === a(b(c(x)))

💡 실무 활용 예시
1. 데이터 변환 파이프라인
   pipe(
     fetchData,
     filterInvalid,
     sortByDate,
     formatForDisplay
   )

2. 입력값 검증 체인
   pipe(
     trim,
     toLowerCase,
     validateEmail,
     sanitize
   )

3. Redux 미들웨어 체인
4. Express 미들웨어 패턴

🔍 라이브러리 비교
- Ramda: R.pipe()
- Lodash: _.flow()
- RxJS: pipe operator

📖 함수형 프로그래밍의 핵심
- 작은 함수들을 조합해서 복잡한 로직 구현
- 재사용성, 테스트 용이성 증가
- 부수 효과(side effect) 최소화
*/

module.exports = pipe;
