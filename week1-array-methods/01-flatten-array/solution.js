/**
 * 중첩 배열을 평탄화하는 함수
 * @param {Array} arr - 중첩된 배열
 * @returns {Array} 평탄화된 1차원 배열
 */
const flatten = (arr) => {
  // 여기에 코드를 작성하세요
};

// 테스트 코드
console.log('Test 1:', flatten([1, 2, 3]));
console.log('Test 2:', flatten([1, [2, 3], 4]));
console.log('Test 3:', flatten([1, [2, [3, [4]], 5]]));
console.log('Test 4:', flatten([[[[1]]], [2], 3]));
console.log('Test 5:', flatten([]));

module.exports = flatten;
