/**
 * Week 1 (월): JS 배열 메서드
 * 실행: node solution.js
 */

// 01. flatten
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

// 02. groupBy
const groupBy = (arr, key) => {
  let result = {};

  for(let item of arr){
    let groupName = item[key];
    if(!result[groupName]){
      result[groupName] = []
    }
    result[groupName].push(item);
  }
  return result;
};

// 03. pipe
const pipe = (...fns) => (x) => {
  return fns.reduce((acc , fn) => {
    return fn(acc);
  }, x);
  
};

// 04. uniqueBy
const uniqueBy = (arr, key) => {
  const uniqueBySet = new Set();
  return arr.filter(item => {
    const value = item[key];
    if(uniqueBySet.has(value)){
      return false;
    }else{
      uniqueBySet.add(value);
      return true;
    }
  })
  
};

// 05. chunk
const chunk = (arr, size) => {
  const result = [];
  for(let i = 0; i < arr.length; i += size){
     result.push(arr.slice(i, i + size));
  }
  return result;
};

// 06. deepMap
const deepMap = (arr, fn) => {
  return arr.map(item => {
    if(Array.isArray(item)){
      return deepMap(item,fn);
    }else {
      return fn(item);
    }
  })
};

// 07. cartesian
// const cartesian = (arr1, arr2) => {
//   return arr1.flatMap(a => arr2.map(b => [a,b]));
// };

const cartesian = (arr1, arr2) => {
  return arr1.map(a => arr2.map(b => [a, b])).flat();
};

// ========== 테스트 ==========
console.log('01. flatten:', flatten([1, [2, [3, [4]]]]));
console.log('02. groupBy:', groupBy([{name:'철수',age:25},{name:'영희',age:28},{name:'민수',age:25}], 'age'));
console.log('03. pipe:', pipe(x => x + 1, x => x * 2)(5));
console.log('04. uniqueBy:', uniqueBy([{id:1,name:'철수'},{id:2,name:'영희'},{id:1,name:'철수2'}], 'id'));
console.log('05. chunk:', chunk([1,2,3,4,5,6,7,8], 3));
console.log('06. deepMap:', deepMap([1, [2, [3, 4]], 5], x => x * 2));
console.log('07. cartesian:', cartesian([1, 2], ['a', 'b']));
