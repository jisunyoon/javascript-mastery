# Week 4: 실전 유틸 함수 🛠️

실무에서 자주 사용되는 유틸 함수들을 직접 구현합니다.

## 📚 학습 목표

- debounce & throttle 마스터
- deep clone 구현
- 이벤트 핸들링 최적화
- 실무 패턴 체득

## 📝 문제 목록

1. **debounce**: 마지막 호출 후 delay만큼 대기
2. **throttle**: delay 동안 최대 1번만 실행
3. **deepClone**: 객체 깊은 복사
4. **get**: 안전한 객체 접근 (lodash _.get)
5. **isEqual**: 깊은 비교
6. **pick/omit**: 객체 속성 선택/제외
7. **sleep**: 지연 함수

## 💡 핵심 개념

```javascript
// debounce: 연속 호출 시 마지막만 실행
// 검색창 입력, 윈도우 리사이즈 등

// throttle: 일정 시간마다 최대 1번
// 스크롤, 마우스 이동 등
```

## 🎯 실무 활용

- **검색 자동완성**: debounce
- **무한 스크롤**: throttle
- **상태 복사**: deepClone
- **안전한 접근**: get
