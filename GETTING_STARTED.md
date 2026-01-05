# 🚀 빠른 시작 가이드

## 1️⃣ GitHub에 올리기

### 저장소 생성
1. GitHub에서 새 저장소 만들기 (예: `javascript-mastery`)
2. 로컬에서 초기화:

```bash
cd javascript-mastery
git init
git add .
git commit -m "Initial commit: JavaScript 마스터 실습 커리큘럼"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/javascript-mastery.git
git push -u origin main
```

## 2️⃣ 첫 문제 풀기

### Week 1 시작
```bash
cd week1-array-methods/01-flatten-array
```

1. `problem.md` 읽기
2. `solution.js`에 코드 작성
3. Node.js로 실행:
   ```bash
   node solution.js
   ```
4. `answer.js`와 비교

## 3️⃣ 진도 관리

### 매일 커밋하기
```bash
git add week1-array-methods/01-flatten-array/solution.js
git commit -m "Week 1-01: 배열 평탄화 완료"
git push
```

### 주간 회고
매주 일요일에:
- README.md의 진도 체크리스트 업데이트
- 어려웠던 부분 정리
- 다음 주 계획

## 📅 추천 학습 루틴

### 월-목 (하루 2시간)

#### 월요일
- 1시간: 코테 1-2문제
- 1시간: JS/TS 실습 1-2문제

#### 화요일
- 1시간: 코테 1-2문제
- 1시간: JS/TS 실습 1-2문제

#### 수요일
- 1시간: 코테 1-2문제
- 1시간: 실습 복습 & 변형 문제

#### 목요일
- 30분: 코테 복습
- 1.5시간: 이번 주 부족한 부분 보충

### 주말 (선택)
- 2-3시간: 블로그 정리, 부족한 부분 추가 학습

## 💡 학습 팁

1. **막히면 30분 고민 후 힌트 보기**
   - 너무 오래 고민하지 말 것
   - 30분 안에 안 풀리면 힌트나 답 확인

2. **여러 방법으로 풀기**
   - 답 확인 후 다른 방법도 시도
   - 성능 비교해보기

3. **블로그에 정리**
   - 배운 개념 정리
   - 막혔던 부분과 해결 과정
   - 다음에 참고할 수 있게

4. **커밋 메시지 상세히**
   ```bash
   # Bad
   git commit -m "완료"
   
   # Good
   git commit -m "Week 1-01: reduce + 재귀로 배열 평탄화 구현"
   ```

## 🎯 5개월 로드맵

- **1개월차**: Week 1-4 완료 (JS 기초 체득)
- **2개월차**: Week 5-8 완료 (TS + React 패턴)
- **3-4개월차**: 토스 프로젝트 개발
- **5개월차**: 배포 + 이력서 정리

## ❓ 자주 묻는 질문

**Q: 문제가 너무 어려워요**
→ 힌트 보고, 답 확인 후 이해하는 것도 학습입니다!

**Q: 시간이 부족해요**
→ 하루 1시간으로 줄이고 천천히 진행하세요.

**Q: 문제가 너무 쉬워요**
→ 도전 과제나 변형 문제를 풀어보세요!

**Q: 막히는 부분이 있어요**
→ ChatGPT, Stack Overflow, MDN 문서 활용하세요.

---

**화이팅! 💪 꾸준히만 하면 분명 실력이 늘어요!**
