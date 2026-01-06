# Week 4 (수): React 최적화 (useCallback, useMemo) ⚛️

---

## 01. useMemo 기본

```tsx
// 문제: 비싼 계산 결과 캐싱
function ExpensiveCalc({ numbers }: { numbers: number[] }) {
  // 합계 계산 (numbers 바뀔 때만)
}
```

<details>
<summary>✅ 정답</summary>

```tsx
function ExpensiveCalc({ numbers }: { numbers: number[] }) {
  const sum = useMemo(() => {
    console.log('계산 중...');
    return numbers.reduce((a, b) => a + b, 0);
  }, [numbers]);
  
  return <p>합계: {sum}</p>;
}
```
</details>

---

## 02. useCallback 기본

```tsx
// 문제: 함수 메모이제이션
function Parent() {
  const [count, setCount] = useState(0);
  // handleClick을 메모이제이션
}
```

<details>
<summary>✅ 정답</summary>

```tsx
function Parent() {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    console.log('클릭!');
  }, []);
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
      <Child onClick={handleClick} />
    </div>
  );
}
```
</details>

---

## 03. React.memo

```tsx
// 문제: props 안 바뀌면 리렌더링 방지
const Child = memo(({ name }: { name: string }) => {
  console.log('Child 렌더링');
  return <p>{name}</p>;
});
```

---

## 04. 필터링 최적화

```tsx
// 문제: useMemo로 필터링 결과 캐싱
function FilterableList({ items }: { items: string[] }) {
  const [query, setQuery] = useState('');
  // filtered를 useMemo로
}
```

<details>
<summary>✅ 정답</summary>

```tsx
function FilterableList({ items }: { items: string[] }) {
  const [query, setQuery] = useState('');
  
  const filtered = useMemo(() => {
    return items.filter(item => 
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [items, query]);
  
  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>{filtered.map((item, i) => <li key={i}>{item}</li>)}</ul>
    </div>
  );
}
```
</details>

---

## 05. 복합 최적화

```tsx
// 문제: useMemo + useCallback + memo 조합
function OptimizedApp() {
  const [count, setCount] = useState(0);
  const [items] = useState(['a', 'b', 'c']);
  
  // expensive: items 기반 계산
  // handleClick: 메모이제이션된 함수
  // ChildList: memo된 컴포넌트
}
```

<details>
<summary>✅ 정답</summary>

```tsx
const ChildList = memo(({ items, onClick }: { items: string[], onClick: () => void }) => {
  console.log('ChildList 렌더링');
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i} onClick={onClick}>{item}</li>
      ))}
    </ul>
  );
});

function OptimizedApp() {
  const [count, setCount] = useState(0);
  const [items] = useState(['a', 'b', 'c']);
  
  const expensive = useMemo(() => {
    console.log('계산!');
    return items.join('-');
  }, [items]);
  
  const handleClick = useCallback(() => {
    console.log('클릭!');
  }, []);
  
  return (
    <div>
      <p>Count: {count}</p>
      <p>Result: {expensive}</p>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
      <ChildList items={items} onClick={handleClick} />
    </div>
  );
}
```
</details>

---

## 💡 언제 사용?

```
useMemo: 비싼 계산 결과 캐싱
useCallback: 자식에게 전달하는 함수
memo: props가 자주 안 바뀌는 컴포넌트
```

**주의**: 무조건 쓰지 말고, 성능 문제가 있을 때만!
