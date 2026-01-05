# Week 2 실습 문제

## 01. 순차 API 호출 (fetchSequentially)

```javascript
const fetchSequentially = async (urls) => {
  // 여기에 코드 작성
  // urls 배열의 각 API를 순서대로 호출
  // 모든 결과를 배열로 반환
};

// 테스트
const urls = [
  'https://jsonplaceholder.typicode.com/users/1',
  'https://jsonplaceholder.typicode.com/users/2',
  'https://jsonplaceholder.typicode.com/users/3'
];

fetchSequentially(urls).then(results => {
  console.log(results);
});
```

## 02. 병렬 API 호출 (fetchParallel)

```javascript
const fetchParallel = async (urls) => {
  // Promise.all 사용
};
```

## 03. 재시도 로직 (fetchWithRetry)

```javascript
const fetchWithRetry = async (url, retries = 3) => {
  // 실패 시 retries번 재시도
  // 모든 시도 실패 시 에러 throw
};
```

## 04. 타임아웃 (fetchWithTimeout)

```javascript
const fetchWithTimeout = (url, timeout = 5000) => {
  // Promise.race 사용
  // timeout 초과 시 에러
};
```

## 💡 정답 힌트

### 01 답안
```javascript
const fetchSequentially = async (urls) => {
  const results = [];
  for (const url of urls) {
    const response = await fetch(url);
    const data = await response.json();
    results.push(data);
  }
  return results;
};
```

### 02 답안
```javascript
const fetchParallel = async (urls) => {
  const promises = urls.map(url => 
    fetch(url).then(res => res.json())
  );
  return Promise.all(promises);
};
```

### 03 답안
```javascript
const fetchWithRetry = async (url, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      if (i === retries - 1) throw error;
      console.log(`재시도 ${i + 1}/${retries}`);
    }
  }
};
```

### 04 답안
```javascript
const fetchWithTimeout = (url, timeout = 5000) => {
  return Promise.race([
    fetch(url).then(res => res.json()),
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Timeout')), timeout)
    )
  ]);
};
```
