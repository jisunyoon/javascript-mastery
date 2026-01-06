# Week 3 (수): React 이벤트, 리스트 렌더링 ⚛️

---

## 01. 이벤트 핸들링

```tsx
// 문제: 폼 제출 시 alert
function Form() {
  // input + 제출 버튼
}
```

<details>
<summary>✅ 정답</summary>

```tsx
function Form() {
  const [value, setValue] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`입력: ${value}`);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button type="submit">제출</button>
    </form>
  );
}
```
</details>

---

## 02. 리스트 렌더링

```tsx
// 문제: 배열을 리스트로 렌더링
const items = ['사과', '바나나', '오렌지'];

function ItemList() {
  // ul > li로 렌더링
}
```

<details>
<summary>✅ 정답</summary>

```tsx
function ItemList() {
  const items = ['사과', '바나나', '오렌지'];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```
</details>

---

## 03. 조건부 렌더링

```tsx
// 문제: isLoggedIn에 따라 다른 UI
function AuthStatus({ isLoggedIn }: { isLoggedIn: boolean }) {
  // 로그인: 환영합니다 + 로그아웃 버튼
  // 비로그인: 로그인해주세요
}
```

<details>
<summary>✅ 정답</summary>

```tsx
function AuthStatus({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>환영합니다!</p>
          <button>로그아웃</button>
        </>
      ) : (
        <p>로그인해주세요</p>
      )}
    </div>
  );
}
```
</details>

---

## 04. Todo 추가/삭제

```tsx
// 문제: 할 일 추가, 삭제 기능
function TodoList() {
  // todos: { id, text }[]
}
```

<details>
<summary>✅ 정답</summary>

```tsx
function TodoList() {
  const [todos, setTodos] = useState<{id: number; text: string}[]>([]);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput('');
  };
  
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(t => t.id !== id));
  };
  
  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTodo}>추가</button>
      <ul>
        {todos.map(t => (
          <li key={t.id}>
            {t.text}
            <button onClick={() => deleteTodo(t.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```
</details>

---

## 05. Todo 완료 토글

```tsx
// 문제: 클릭하면 완료 토글
function TodoWithToggle() {
  // todos: { id, text, completed }[]
}
```

<details>
<summary>✅ 정답</summary>

```tsx
function TodoWithToggle() {
  const [todos, setTodos] = useState([
    { id: 1, text: '공부하기', completed: false },
    { id: 2, text: '운동하기', completed: true }
  ]);
  
  const toggle = (id: number) => {
    setTodos(todos.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };
  
  return (
    <ul>
      {todos.map(t => (
        <li 
          key={t.id}
          onClick={() => toggle(t.id)}
          style={{ textDecoration: t.completed ? 'line-through' : 'none' }}
        >
          {t.text}
        </li>
      ))}
    </ul>
  );
}
```
</details>

---

## 06. 필터링

```tsx
// 문제: 전체/완료/미완료 필터
function FilteredTodos() {
  // filter: 'all' | 'active' | 'completed'
}
```

<details>
<summary>✅ 정답</summary>

```tsx
function FilteredTodos() {
  const [todos] = useState([
    { id: 1, text: '공부', completed: false },
    { id: 2, text: '운동', completed: true }
  ]);
  const [filter, setFilter] = useState<'all'|'active'|'completed'>('all');
  
  const filtered = todos.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });
  
  return (
    <div>
      <button onClick={() => setFilter('all')}>전체</button>
      <button onClick={() => setFilter('active')}>미완료</button>
      <button onClick={() => setFilter('completed')}>완료</button>
      <ul>{filtered.map(t => <li key={t.id}>{t.text}</li>)}</ul>
    </div>
  );
}
```
</details>
