# 01. 중첩 배열 평탄화 (Flatten Array)

## 🎯 문제 설명

중첩된 배열을 평탄화(flatten)하는 함수를 작성하세요.

## 📝 요구사항

```javascript
const flatten = (arr) => {
  // 여기에 코드를 작성하세요
};
```

### 입력
- `arr`: 중첩된 배열 (깊이 제한 없음)

### 출력
- 평탄화된 1차원 배열

## 🧪 테스트 케이스

```javascript
// Test 1
console.log(flatten([1, 2, 3]));
// 예상 출력: [1, 2, 3]

// Test 2
console.log(flatten([1, [2, 3], 4]));
// 예상 출력: [1, 2, 3, 4]

// Test 3
console.log(flatten([1, [2, [3, [4]], 5]]));
// 예상 출력: [1, 2, 3, 4, 5]

// Test 4
console.log(flatten([[[[1]]], [2], 3]));
// 예상 출력: [1, 2, 3]

// Test 5
console.log(flatten([]));
// 예상 출력: []
```

## ⚠️ 제약사항

- `Array.prototype.flat()` 메서드는 **사용하지 마세요**
- `reduce()`를 활용해보세요
- 재귀를 사용해야 합니다

## 💡 힌트

<details>
<summary>힌트 1 (클릭)</summary>

`Array.isArray()`를 사용하면 현재 요소가 배열인지 확인할 수 있어요.

</details>

<details>
<summary>힌트 2 (클릭)</summary>

```javascript
const flatten = (arr) => {
  return arr.reduce((acc, val) => {
    // 만약 val이 배열이라면?
    // 만약 val이 배열이 아니라면?
  }, []);
};
```

</details>

<details>
<summary>힌트 3 (클릭)</summary>

재귀적으로 생각해보세요:
1. 현재 요소가 배열이면 → flatten을 다시 호출
2. 현재 요소가 배열이 아니면 → 그냥 추가

</details>

## 🎓 학습 포인트

- `reduce()` 활용법
- 재귀 함수 이해
- 스프레드 연산자 활용
- 타입 체크 (Array.isArray)

## 🚀 도전 과제

다 풀었다면 이것도 해보세요!

1. **깊이 제한 버전**: 최대 깊이를 지정할 수 있게 만들기
   ```javascript
   flatten([1, [2, [3, [4]]]], 2) // [1, 2, 3, [4]]
   ```

2. **반복문 버전**: 재귀 대신 while/for문으로 구현하기

3. **성능 비교**: 내장 `flat()`과 성능 비교하기
