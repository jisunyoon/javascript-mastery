// 01. mymap
// Array.map 직접 만들기
const myMap = (arr, callback) => {
  const result = [];
  for(let i = 0; i < arr.length; i++){
    const count = callback(arr[i]);
    result.push(count);
  }

  return result
};

// 사용
myMap([1, 2, 3], x => x * 2);  // [2, 4, 6]
myMap(['a', 'b'], x => x + '!');  // ['a!', 'b!']

// 02. myFilter
// Array.filter 직접 만들기
const myFilter = (arr, callback) => {
const result = [];
  for(let i = 0; i < arr.length; i++){
    if(callback(arr[i])){
        result.push(count);
    }
  }

  return result
};

// 사용
myFilter([1, 2, 3, 4], x => x % 2 === 0);  // [2, 4]
myFilter(['apple', 'banana', 'cherry'], x => x.length > 5);  // ['banana', 'cherry']

// 03. myReduce
// Array.reduce 직접 만들기
const myReduce = (arr, callback, initialValue) => {
  // 작성
};

// 사용
myReduce([1, 2, 3, 4], (acc, cur) => acc + cur, 0);  // 10
myReduce([1, 2, 3], (acc, cur) => acc * cur, 1);  // 6

//04. myFind
// Array.find 직접 만들기
const myFind = (arr, callback) => {
  // 작성
};

// 사용
myFind([1, 2, 3, 4], x => x > 2);  // 3
myFind(['a', 'b', 'c'], x => x === 'b');  // 'b'
myFind([1, 2, 3], x => x > 10);  // undefined

//05. myEvery
// Array.every 직접 만들기 (전부 만족?)
const myEvery = (arr, callback) => {
  // 작성
};

// 사용
myEvery([2, 4, 6], x => x % 2 === 0);  // true (전부 짝수)
myEvery([2, 3, 6], x => x % 2 === 0);  // false (3은 홀수)

//06. mySome
// Array.some 직접 만들기 (하나라도 만족?)
const mySome = (arr, callback) => {
  // 작성
};

// 사용
mySome([1, 3, 5, 6], x => x % 2 === 0);  // true (6이 짝수)
mySome([1, 3, 5], x => x % 2 === 0);  // false (전부 홀수)

// 07. myFlat
// Array.flat 직접 만들기 (중첩 배열 펼치기)
const myFlat = (arr) => {
  // 작성
};

// 사용
myFlat([1, [2, 3], [4, 5]]);  // [1, 2, 3, 4, 5]
myFlat([[1, 2], [3, [4, 5]]]);  // [1, 2, 3, [4, 5]] (1단계만!)