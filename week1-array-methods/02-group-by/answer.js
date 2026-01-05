/**
 * 객체 배열을 특정 키로 그룹화
 * @param {Array} arr - 객체 배열
 * @param {string|Function} key - 그룹화 기준
 * @returns {Object} 그룹화된 객체
 */

// ✅ 방법 1: reduce (가장 일반적)
const groupBy = (arr, key) => {
  return arr.reduce((acc, item) => {
    // 그룹 키 구하기
    const groupKey = typeof key === 'function' ? key(item) : item[key];
    
    // 해당 키가 없으면 빈 배열 생성
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    
    // 아이템 추가
    acc[groupKey].push(item);
    
    return acc;
  }, {});
};

// ✅ 방법 2: 더 간결한 버전
const groupBy2 = (arr, key) => {
  return arr.reduce((acc, item) => {
    const groupKey = typeof key === 'function' ? key(item) : item[key];
    (acc[groupKey] = acc[groupKey] || []).push(item);
    return acc;
  }, {});
};

// ✅ 방법 3: for...of 사용
const groupBy3 = (arr, key) => {
  const result = {};
  
  for (const item of arr) {
    const groupKey = typeof key === 'function' ? key(item) : item[key];
    
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    
    result[groupKey].push(item);
  }
  
  return result;
};

// 🚀 보너스 1: 카운팅만 하기
const countBy = (arr, key) => {
  return arr.reduce((acc, item) => {
    const groupKey = typeof key === 'function' ? key(item) : item[key];
    acc[groupKey] = (acc[groupKey] || 0) + 1;
    return acc;
  }, {});
};

// 🚀 보너스 2: 다중 키 그룹화
const groupByMultiple = (arr, keys) => {
  return arr.reduce((acc, item) => {
    // 여러 키의 값을 '-'로 연결
    const groupKey = keys.map(k => item[k]).join('-');
    (acc[groupKey] = acc[groupKey] || []).push(item);
    return acc;
  }, {});
};

// 테스트
const people = [
  { name: '철수', age: 25, gender: 'male' },
  { name: '영희', age: 28, gender: 'female' },
  { name: '민수', age: 25, gender: 'male' },
  { name: '지영', age: 28, gender: 'female' }
];

console.log('=== 기본 그룹화 ===');
console.log(groupBy(people, 'age'));

console.log('\n=== 함수로 그룹화 ===');
const products = [
  { name: '사과', price: 1000 },
  { name: '바나나', price: 1500 },
  { name: '포도', price: 3000 },
  { name: '수박', price: 5000 }
];
console.log(groupBy(products, item => item.price >= 3000 ? 'expensive' : 'cheap'));

console.log('\n=== 카운팅 ===');
console.log(countBy(people, 'age')); // { 25: 2, 28: 2 }

console.log('\n=== 다중 키 그룹화 ===');
console.log(groupByMultiple(people, ['age', 'gender']));

/*
📚 핵심 개념 정리

1. reduce로 객체 만들기
   - 초기값: {} (빈 객체)
   - 누적값에 키-값 쌍을 계속 추가

2. 동적 키 접근
   - obj[key]: 변수로 키에 접근
   - obj.key: 고정된 문자열 'key'에 접근

3. 논리 연산자 활용
   - acc[groupKey] = acc[groupKey] || []
   - 키가 없으면 빈 배열 생성, 있으면 기존 배열 사용

4. typeof 체크
   - typeof key === 'function': 함수인지 확인
   - 함수면 호출, 문자열이면 프로퍼티 접근

⚡ 성능 팁
- reduce: 함수형, 가독성 좋음
- for...of: 약간 더 빠름, 명령형
- Object.groupBy() (ES2024): 최신 브라우저에서 지원

💡 실무 활용 예시
1. 날짜별 이벤트 그룹화
2. 카테고리별 상품 분류
3. 사용자별 주문 내역 정리
4. 태그별 게시글 분류

🔍 Lodash의 _.groupBy()
- 이 문제는 Lodash 라이브러리의 groupBy를 직접 구현한 것
- 실무에서는 Lodash 사용 고려
- 하지만 원리를 아는 것이 중요!
*/

module.exports = groupBy;
