# 05. 배열 청킹 (Array Chunking)

배열을 지정한 크기의 작은 배열들로 나누는 `chunk` 함수 작성

```javascript
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);
// [[1, 2, 3], [4, 5, 6], [7, 8]]

chunk(['a', 'b', 'c', 'd'], 2);
// [['a', 'b'], ['c', 'd']]
```

힌트: reduce + slice 또는 for문
