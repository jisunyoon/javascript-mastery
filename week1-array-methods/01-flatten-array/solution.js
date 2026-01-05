/**
 * 중첩 배열을 평탄화하는 함수
 * @param {Array} arr - 중첩된 배열
 * @returns {Array} 평탄화된 1차원 배열
 */
const flatten = (arr) => {
  return arr.reduce((acc, val) => {
    if(Array.isArray(val)){
      return acc.concat(flatten(val));
    }else{
      return acc.concat(val);
    }
  }, []);
};

// flat 사용
// const flatten = (arr) => {
//   return arr.flat(Infinity);
// }

// 반복문 사용
// const flatten = (arr) => {
//   let result = [];
//   for(let item of arr){
//     if(Array.isArray(item)){
//       result.push(...flatten02(item));
//     }else{
//       result.push(item);
//     }
//   }

//   return result
// }

// 테스트 코드
console.log('Test 1:', flatten([1, 2, 3]));
console.log('Test 2:', flatten([1, [2, 3], 4]));
console.log('Test 3:', flatten([1, [2, [3, [4]], 5]]));
console.log('Test 4:', flatten([[[[1]]], [2], 3]));
console.log('Test 5:', flatten([]));

module.exports = flatten;
