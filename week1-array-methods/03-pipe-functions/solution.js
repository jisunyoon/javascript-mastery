/**
 * 여러 함수를 순차 실행하는 파이프라인
 * @param  {...Function} fns - 실행할 함수들
 * @returns {Function} 합성된 함수
 */
const pipe = (...fns) => (x) => {
  // 여기에 코드를 작성하세요
};

// 테스트 코드
const add1 = x => x + 1;
const multiply2 = x => x * 2;
const subtract3 = x => x - 3;

const calculate = pipe(add1, multiply2, subtract3);
console.log('Test 1:', calculate(5)); // 9

const toUpperCase = str => str.toUpperCase();
const addExclamation = str => str + '!';
const repeat = str => str.repeat(2);

const transform = pipe(toUpperCase, addExclamation, repeat);
console.log('Test 2:', transform('hello')); // "HELLO!HELLO!"

module.exports = pipe;
