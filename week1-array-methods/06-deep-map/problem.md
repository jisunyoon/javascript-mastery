# 06. 깊은 맵핑 (Deep Map)

중첩 배열의 모든 값에 함수 적용하는 `deepMap` 함수 작성

```javascript
deepMap([1, [2, [3, 4]], 5], x => x * 2);
// [2, [4, [6, 8]], 10]
```

# 07. 데카르트 곱 (Cartesian Product)

두 배열의 모든 조합을 만드는 `cartesianProduct` 함수 작성

```javascript
cartesianProduct([1, 2], ['a', 'b']);
// [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
```

힌트: reduce + flatMap 또는 이중 for문
