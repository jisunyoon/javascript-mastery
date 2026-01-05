# Week 2: 비동기 패턴 ⚡

Promise, async/await를 실전에서 활용하는 패턴을 익힙니다.

## 📚 학습 목표

- Promise 체이닝과 에러 핸들링
- async/await 마스터
- 병렬/순차 처리 구분
- 실전 API 호출 패턴

## 📝 문제 목록

1. **fetchSequentially**: API 순차 호출
2. **fetchParallel**: API 병렬 호출
3. **fetchWithRetry**: 재시도 로직
4. **fetchWithTimeout**: 타임아웃 구현
5. **promiseAll**: Promise.all 직접 구현
6. **asyncMap**: 배열의 각 요소에 비동기 함수 적용
7. **raceWithTimeout**: 가장 빠른 응답 + 타임아웃

## 🧪 테스트 API

```javascript
// 무료 테스트 API
const API_URL = 'https://jsonplaceholder.typicode.com';

// 사용 예시
fetch(`${API_URL}/users/1`)
  .then(res => res.json())
  .then(data => console.log(data));
```

## 💡 학습 팁

- 실제 API 호출해보면서 테스트
- console.log로 실행 순서 확인
- 에러 케이스도 꼭 테스트
