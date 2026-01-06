# Week 2 (수): React useState, useEffect ⚛️

---

## 01. useState 기본

```tsx
// 문제: 카운터 만들기
function Counter() {
  // count 상태, +1/-1 버튼
}
```

<details>
<summary>✅ 정답</summary>

```tsx
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(c => c - 1)}>-1</button>
    </div>
  );
}
```
</details>

---

## 02. useState 객체

```tsx
// 문제: 이름, 나이 입력 폼
function UserForm() {
  // user: { name: string, age: number }
}
```

<details>
<summary>✅ 정답</summary>

```tsx
function UserForm() {
  const [user, setUser] = useState({ name: '', age: 0 });
  
  return (
    <div>
      <input 
        value={user.name} 
        onChange={e => setUser({ ...user, name: e.target.value })} 
      />
      <input 
        type="number"
        value={user.age} 
        onChange={e => setUser({ ...user, age: Number(e.target.value) })} 
      />
    </div>
  );
}
```
</details>

---

## 03. useEffect 마운트

```tsx
// 문제: 마운트 시 콘솔 출력
function MountLogger() {
  // 마운트: "컴포넌트 마운트!"
  // 언마운트: "컴포넌트 언마운트!"
}
```

<details>
<summary>✅ 정답</summary>

```tsx
function MountLogger() {
  useEffect(() => {
    console.log('컴포넌트 마운트!');
    return () => console.log('컴포넌트 언마운트!');
  }, []);
  
  return <div>MountLogger</div>;
}
```
</details>

---

## 04. useEffect 의존성

```tsx
// 문제: count가 바뀔 때마다 document.title 업데이트
function TitleUpdater() {
  const [count, setCount] = useState(0);
  // count 바뀔 때마다 title = `Count: ${count}`
}
```

<details>
<summary>✅ 정답</summary>

```tsx
function TitleUpdater() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  
  return <button onClick={() => setCount(c => c + 1)}>+1 ({count})</button>;
}
```
</details>

---

## 05. 타이머

```tsx
// 문제: 1초마다 증가하는 타이머 + 시작/정지/리셋
function Timer() {
  // seconds, isRunning 상태
}
```

<details>
<summary>✅ 정답</summary>

```tsx
function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(id);
  }, [isRunning]);
  
  return (
    <div>
      <p>{seconds}초</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? '정지' : '시작'}
      </button>
      <button onClick={() => { setSeconds(0); setIsRunning(false); }}>
        리셋
      </button>
    </div>
  );
}
```
</details>

---

## 06. 데이터 fetch

```tsx
// 문제: API에서 유저 목록 가져오기
function UserList() {
  // loading, error, users 상태
  // https://jsonplaceholder.typicode.com/users
}
```

<details>
<summary>✅ 정답</summary>

```tsx
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => { setUsers(data); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, []);
  
  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러: {error}</p>;
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}
```
</details>

---

## 07. 검색 디바운스

```tsx
// 문제: 입력 후 500ms 대기 후 검색
function SearchInput() {
  // query, debouncedQuery 상태
}
```

<details>
<summary>✅ 정답</summary>

```tsx
function SearchInput() {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 500);
    return () => clearTimeout(timer);
  }, [query]);
  
  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <p>검색어: {debouncedQuery}</p>
    </div>
  );
}
```
</details>
