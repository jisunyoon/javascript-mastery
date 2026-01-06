# 미니 프로젝트 🚀

**목요일 1.5시간**씩 진행

---

## 📅 일정

| 주차 | 프로젝트 | 목표 |
|------|---------|------|
| Week 1 | Todo 앱 | 세팅 + 기본 UI |
| Week 2 | Todo 앱 | CRUD 완성 |
| Week 3 | Todo 앱 | 필터링 + 로컬스토리지 |
| Week 4 | Todo 앱 | 스타일링 + 완성 |

---

## 🛠️ 프로젝트 세팅

```bash
npm create vite@latest todo-app -- --template react-ts
cd todo-app
npm install
npm run dev
```

---

## 📁 폴더 구조

```
todo-app/
├── src/
│   ├── components/
│   │   ├── TodoInput.tsx
│   │   ├── TodoItem.tsx
│   │   ├── TodoList.tsx
│   │   └── TodoFilter.tsx
│   ├── hooks/
│   │   └── useLocalStorage.ts
│   ├── types/
│   │   └── todo.ts
│   ├── App.tsx
│   └── main.tsx
└── package.json
```

---

## 📝 타입 정의

```typescript
// src/types/todo.ts
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export type FilterType = 'all' | 'active' | 'completed';
```

---

## 🪝 useLocalStorage Hook

```typescript
// src/hooks/useLocalStorage.ts
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
```

---

## 🎯 주차별 목표

### Week 1: 세팅 + 기본 UI
- [ ] 프로젝트 생성
- [ ] 폴더 구조 세팅
- [ ] 타입 정의
- [ ] 기본 레이아웃

### Week 2: CRUD
- [ ] Todo 추가
- [ ] Todo 삭제
- [ ] Todo 완료 토글

### Week 3: 필터링 + 저장
- [ ] 필터링 (전체/완료/미완료)
- [ ] 로컬스토리지 저장
- [ ] 새로고침해도 유지

### Week 4: 완성
- [ ] 스타일링
- [ ] 애니메이션 (선택)
- [ ] 리팩토링

---

## 💡 시작 코드

```tsx
// src/App.tsx
import { useState } from 'react';
import { Todo, FilterType } from './types/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, {
      id: crypto.randomUUID(),
      text: input,
      completed: false
    }]);
    setInput('');
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const filteredTodos = todos.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  return (
    <div>
      <h1>Todo App</h1>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTodo}>추가</button>
      
      <div>
        <button onClick={() => setFilter('all')}>전체</button>
        <button onClick={() => setFilter('active')}>미완료</button>
        <button onClick={() => setFilter('completed')}>완료</button>
      </div>
      
      <ul>
        {filteredTodos.map(t => (
          <li key={t.id}>
            <span 
              onClick={() => toggleTodo(t.id)}
              style={{ textDecoration: t.completed ? 'line-through' : 'none' }}
            >
              {t.text}
            </span>
            <button onClick={() => deleteTodo(t.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

---

**화이팅! 🔥**
