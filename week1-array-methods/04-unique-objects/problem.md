# 04. 객체 배열 중복 제거

객체 배열에서 특정 키 기준으로 중복 제거하는 `uniqueBy` 함수 작성

```javascript
const users = [
  { id: 1, name: '철수' },
  { id: 2, name: '영희' },
  { id: 1, name: '철수2' },
  { id: 3, name: '민수' }
];

uniqueBy(users, 'id');
// [{ id: 1, name: '철수' }, { id: 2, name: '영희' }, { id: 3, name: '민수' }]
```

힌트: Set, filter, findIndex
