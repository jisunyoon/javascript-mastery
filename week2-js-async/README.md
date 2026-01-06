# Week 2 (월): JS 비동기 패턴 ⚡

---

## 01. fetchSequentially (순차 호출)

```javascript
const fetchSequentially = async (urls) => {
  // 여기에 코드 작성
};
```

<details>
<summary>✅ 정답</summary>

```javascript
const fetchSequentially = async (urls) => {
  const results = [];
  for (const url of urls) {
    const res = await fetch(url);
    results.push(await res.json());
  }
  return results;
};
```
</details>

---

## 02. fetchParallel (병렬 호출)

```javascript
const fetchParallel = async (urls) => {
  // 여기에 코드 작성
};
```

<details>
<summary>✅ 정답</summary>

```javascript
const fetchParallel = async (urls) => {
  return Promise.all(urls.map(url => fetch(url).then(r => r.json())));
};
```
</details>

---

## 03. fetchWithRetry (재시도)

```javascript
const fetchWithRetry = async (url, retries = 3) => {
  // 여기에 코드 작성
};
```

<details>
<summary>✅ 정답</summary>

```javascript
const fetchWithRetry = async (url, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      return await res.json();
    } catch (e) {
      if (i === retries - 1) throw e;
    }
  }
};
```
</details>

---

## 04. fetchWithTimeout (타임아웃)

```javascript
const fetchWithTimeout = (url, timeout = 5000) => {
  // 여기에 코드 작성
};
```

<details>
<summary>✅ 정답</summary>

```javascript
const fetchWithTimeout = (url, timeout = 5000) => {
  return Promise.race([
    fetch(url).then(r => r.json()),
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Timeout')), timeout)
    )
  ]);
};
```
</details>

---

## 05. promiseAll (직접 구현)

```javascript
const promiseAll = (promises) => {
  // 여기에 코드 작성
};
```

<details>
<summary>✅ 정답</summary>

```javascript
const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;
    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then(r => {
          results[i] = r;
          if (++completed === promises.length) resolve(results);
        })
        .catch(reject);
    });
  });
};
```
</details>

---

## 06. asyncMap

```javascript
const asyncMap = async (arr, asyncFn) => {
  // 여기에 코드 작성
};
```

<details>
<summary>✅ 정답</summary>

```javascript
const asyncMap = (arr, asyncFn) => Promise.all(arr.map(asyncFn));
```
</details>

---

## 07. sleep

```javascript
const sleep = (ms) => {
  // 여기에 코드 작성
};
```

<details>
<summary>✅ 정답</summary>

```javascript
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
```
</details>
