/**
 * Week 2 (수): React useState, useEffect - 정답
 */
import { useState, useEffect } from 'react';

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

function UserForm() {
  const [user, setUser] = useState({ name: '', age: 0 });
  return (
    <div>
      <input 
        placeholder="이름"
        value={user.name} 
        onChange={e => setUser({ ...user, name: e.target.value })} 
      />
      <input 
        type="number"
        placeholder="나이"
        value={user.age} 
        onChange={e => setUser({ ...user, age: Number(e.target.value) })} 
      />
      <p>이름: {user.name}, 나이: {user.age}</p>
    </div>
  );
}

function MountLogger() {
  useEffect(() => {
    console.log('마운트!');
    return () => console.log('언마운트!');
  }, []);
  return <div>MountLogger (콘솔 확인)</div>;
}

function TitleUpdater() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  return <button onClick={() => setCount(c => c + 1)}>+1 ({count})</button>;
}

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

function UserList() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => { setUsers(data); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, []);
  
  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러: {error}</p>;
  return <ul>{users.slice(0,5).map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}

function SearchInput() {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 500);
    return () => clearTimeout(timer);
  }, [query]);
  
  return (
    <div>
      <input 
        value={query} 
        onChange={e => setQuery(e.target.value)}
        placeholder="검색..."
      />
      <p>입력: {query}</p>
      <p>검색어: {debouncedQuery}</p>
    </div>
  );
}

function App() {
  const [show, setShow] = useState(true);
  return (
    <div style={{ padding: 20 }}>
      <h1>Week 2: React - 정답</h1>
      <h2>01. Counter</h2>
      <Counter />
      <h2>02. UserForm</h2>
      <UserForm />
      <h2>03. MountLogger</h2>
      <button onClick={() => setShow(!show)}>{show ? '숨기기' : '보이기'}</button>
      {show && <MountLogger />}
      <h2>04. TitleUpdater</h2>
      <TitleUpdater />
      <h2>05. Timer</h2>
      <Timer />
      <h2>06. UserList</h2>
      <UserList />
      <h2>07. SearchInput</h2>
      <SearchInput />
    </div>
  );
}

export default App;
