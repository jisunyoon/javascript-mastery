/**
 * 객체 배열을 특정 키로 그룹화
 * @param {Array} arr - 객체 배열
 * @param {string|Function} key - 그룹화 기준 (키 이름 또는 함수)
 * @returns {Object} 그룹화된 객체
 */
const groupBy = (arr, key) => {
  // 여기에 코드를 작성하세요
};

// 테스트 코드
const people = [
  { name: '철수', age: 25 },
  { name: '영희', age: 28 },
  { name: '민수', age: 25 },
  { name: '지영', age: 28 }
];

console.log('Test 1 (문자열 키):', groupBy(people, 'age'));

const products = [
  { name: '사과', price: 1000 },
  { name: '바나나', price: 1500 },
  { name: '포도', price: 3000 },
  { name: '수박', price: 5000 }
];

console.log('Test 2 (함수):', groupBy(products, (item) => {
  return item.price >= 3000 ? 'expensive' : 'cheap';
}));

console.log('Test 3 (빈 배열):', groupBy([], 'age'));

module.exports = groupBy;
