// 01. myMap
// Array.map 직접 만들기!
const myMap = (arr, callback) => {
  const result = [];

  for(let i = 0; i<arr.length; i++){
    const value = callback(arr[i]);
    result.push(value);
  }

  return result;
};

myMap([1, 2, 3], x => x * 2);  // [2, 4, 6]
myMap(['a', 'b'], x => x + '!');  // ['a!', 'b!']

// 02. myFilter
// Array.filter 직접 만들기!
const myFilter = (arr, callback) => {
  const result = [];
    for(let i = 0; i<arr.length; i++){
        const value = callback(arr[i]);
        if(value){
            result.push(arr[i]);
        }
    } 
    return result;
};

myFilter([1, 2, 3, 4], x => x % 2 === 0);  // [2, 4]
myFilter([5, 10, 15], x => x > 8);  // [10, 15]

// 03. myReduce
// Array.reduce 직접 만들기!
const myReduce = (arr, callback, initialValue) => {
  const acc = initialValue;

   for (let i = 0; i < arr.length; i++) {
    acc = callback(acc, acc[i])
   }
   return acc;
};

myReduce([1, 2, 3, 4], (acc, cur) => acc + cur, 0);  // 10
myReduce([1, 2, 3], (acc, cur) => acc * cur, 1);  // 6

// 04. myFind
// Array.find 직접 만들기! 조건 맞는 첫 번째!
const myFind = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if(callback(arr[i])){
        return arr[i]
    }}
    return undefined;
};

myFind([1, 2, 3, 4], x => x > 2);  // 3 (첫 번째!)
myFind([1, 2, 3], x => x > 10);  // undefined

// 05. myEvery
// Array.every 직접 만들기! (전부 만족?)
const myEvery = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if(!callback(arr[i])){
        return false
    }}
    return true;
};

myEvery([2, 4, 6], x => x % 2 === 0);  // true
myEvery([2, 3, 6], x => x % 2 === 0);  // false (3 때문에)

// 06. mySome
// Array.some 직접 만들기! (하나라도 만족?)
const mySome = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if(callback(arr[i])){
        return true
    }}
    return false;
};

mySome([1, 3, 5, 6], x => x % 2 === 0);  // true (6 때문에)
mySome([1, 3, 5], x => x % 2 === 0);  // false

// 07. myFlat
// Array.flat 직접 만들기! (1단계만 펼치기)
const myFlat = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])){
        result.push(...arr[i]);
    }else{
        result.push(arr[i])
    }
  }
  return result;
};

myFlat([1, [2, 3], [4, 5]]);  // [1, 2, 3, 4, 5]
myFlat([[1, 2], [3, [4, 5]]]);  // [1, 2, 3, [4, 5]]