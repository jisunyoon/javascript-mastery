# 02. 객체 배열 그룹화 (Group By)

## 🎯 문제 설명

객체 배열을 특정 키를 기준으로 그룹화하는 함수를 작성하세요.

## 📝 요구사항

```javascript
const groupBy = (arr, key) => {
  // 여기에 코드를 작성하세요
};
```

### 입력
- `arr`: 객체 배열
- `key`: 그룹화 기준이 되는 키 (문자열 또는 함수)

### 출력
- 그룹화된 객체 (키: 그룹명, 값: 해당 그룹 배열)

## 🧪 테스트 케이스

```javascript
// Test 1: 문자열 키로 그룹화
const people = [
  { name: '철수', age: 25 },
  { name: '영희', age: 28 },
  { name: '민수', age: 25 },
  { name: '지영', age: 28 }
];

console.log(groupBy(people, 'age'));
/*
{
  25: [
    { name: '철수', age: 25 },
    { name: '민수', age: 25 }
  ],
  28: [
    { name: '영희', age: 28 },
    { name: '지영', age: 28 }
  ]
}
*/

// Test 2: 함수로 그룹화
const products = [
  { name: '사과', price: 1000 },
  { name: '바나나', price: 1500 },
  { name: '포도', price: 3000 },
  { name: '수박', price: 5000 }
];

console.log(groupBy(products, (item) => {
  return item.price >= 3000 ? 'expensive' : 'cheap';
}));
/*
{
  cheap: [
    { name: '사과', price: 1000 },
    { name: '바나나', price: 1500 }
  ],
  expensive: [
    { name: '포도', price: 3000 },
    { name: '수박', price: 5000 }
  ]
}
*/

// Test 3: 빈 배열
console.log(groupBy([], 'age'));
// {}
```

## 💡 힌트

<details>
<summary>힌트 1 (클릭)</summary>

`reduce()`를 사용해서 객체를 만들어가세요. 초기값은 빈 객체 `{}`

</details>

<details>
<summary>힌트 2 (클릭)</summary>

```javascript
const groupBy = (arr, key) => {
  return arr.reduce((acc, item) => {
    // 1. 그룹 키 구하기 (key가 문자열인지 함수인지 확인)
    // 2. 해당 키가 acc에 없으면 빈 배열 만들기
    // 3. item 추가
    return acc;
  }, {});
};
```

</details>

<details>
<summary>힌트 3 (클릭)</summary>

`typeof key === 'function'`으로 함수인지 확인할 수 있어요.

</details>

## ⚠️ 주의사항

- `key`가 문자열이면 `item[key]`로 접근
- `key`가 함수면 `key(item)`으로 호출
- 같은 그룹 키가 여러 번 나올 수 있음

## 🎓 학습 포인트

- `reduce()`로 객체 만들기
- 동적 키 접근 (`item[key]`)
- 함수와 문자열 구분 (typeof)
- 논리 연산자 활용 (`acc[groupKey] = acc[groupKey] || []`)

## 🚀 도전 과제

1. **다중 키 그룹화**: 여러 키로 동시에 그룹화
   ```javascript
   groupBy(people, ['age', 'gender'])
   // { '25-male': [...], '25-female': [...] }
   ```

2. **카운팅**: 각 그룹의 개수만 반환
   ```javascript
   countBy(people, 'age') // { 25: 2, 28: 2 }
   ```

3. **체이닝**: 그룹화 후 각 그룹에 함수 적용
   ```javascript
   groupBy(people, 'age').map(group => group.length)
   ```
