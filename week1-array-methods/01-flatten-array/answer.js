/**
 * 중첩 배열을 평탄화하는 함수
 * @param {Array} arr - 중첩된 배열
 * @returns {Array} 평탄화된 1차원 배열
 */

// ✅ 방법 1: reduce + 재귀 (가장 직관적)
const flatten = (arr) => {
  return arr.reduce((acc, val) => {
    return Array.isArray(val)
      ? [...acc, ...flatten(val)]  // 배열이면 재귀 호출
      : [...acc, val];               // 배열 아니면 그냥 추가
  }, []);
};

// ✅ 방법 2: reduce + concat (더 간결)
const flatten2 = (arr) => {
  return arr.reduce((acc, val) => 
    acc.concat(Array.isArray(val) ? flatten2(val) : val)
  , []);
};

// ✅ 방법 3: 반복문 사용 (재귀 없이)
const flatten3 = (arr) => {
  const result = [];
  const stack = [...arr];
  
  while (stack.length) {
    const item = stack.pop();
    
    if (Array.isArray(item)) {
      stack.push(...item);  // 배열이면 스택에 다시 넣기
    } else {
      result.unshift(item); // 값이면 결과에 추가
    }
  }
  
  return result;
};

// 🚀 보너스: 깊이 제한 버전
const flattenWithDepth = (arr, depth = Infinity) => {
  if (depth === 0) return arr;
  
  return arr.reduce((acc, val) => {
    return Array.isArray(val)
      ? [...acc, ...flattenWithDepth(val, depth - 1)]
      : [...acc, val];
  }, []);
};

// 테스트
console.log('=== 방법 1 ===');
console.log(flatten([1, 2, 3]));                    // [1, 2, 3]
console.log(flatten([1, [2, 3], 4]));               // [1, 2, 3, 4]
console.log(flatten([1, [2, [3, [4]], 5]]));        // [1, 2, 3, 4, 5]
console.log(flatten([[[[1]]], [2], 3]));            // [1, 2, 3]

console.log('\n=== 깊이 제한 ===');
console.log(flattenWithDepth([1, [2, [3, [4]]]], 2)); // [1, 2, 3, [4]]

/* 
📚 핵심 개념 정리

1. reduce 활용
   - 누적값(acc)에 값을 하나씩 추가
   - 초기값은 빈 배열 []

2. 재귀 호출
   - 배열을 만나면 flatten을 다시 호출
   - 기저 조건: 배열이 아닌 값

3. 스프레드 연산자
   - [...acc, ...flatten(val)]: 배열을 펼쳐서 합치기
   - acc.concat(flatten(val))과 동일한 효과

4. Array.isArray()
   - 값이 배열인지 확인하는 가장 정확한 방법
   - typeof는 배열도 'object'를 반환하므로 부적합

⚡ 성능 비교
- 방법 1, 2: 가독성 좋지만 재귀 스택 오버플로우 가능성
- 방법 3: 반복문 사용으로 스택 안전, 약간 빠름
- 내장 flat(): 가장 빠름 (C++로 최적화됨)

💡 실무 팁
- 깊이가 얕다면(1-2단계): 내장 flat() 사용
- 깊이가 깊거나 제한 필요: 직접 구현
- 대량 데이터: 반복문 버전 고려
*/

module.exports = flatten;
