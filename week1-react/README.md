# Week 1 (수): React JSX, 컴포넌트, Props ⚛️

**실습 방법**: mini-projects/todo-app에서 실습하거나, 새 프로젝트 생성

```bash
npm create vite@latest react-practice -- --template react-ts
cd react-practice
npm install
npm run dev
```

---

## 01. JSX 기본 문법

JSX로 UI를 표현하세요:

```tsx
// 문제: 아래 HTML을 JSX로 변환하세요
// <div class="container">
//   <h1>안녕하세요</h1>
//   <p>React 학습 중입니다</p>
// </div>
```

<details>
<summary>✅ 정답</summary>

```tsx
function App() {
  return (
    <div className="container">  {/* class → className */}
      <h1>안녕하세요</h1>
      <p>React 학습 중입니다</p>
    </div>
  );
}
```
</details>

---

## 02. 변수 삽입

JSX에 변수를 삽입하세요:

```tsx
// 문제: 변수를 화면에 표시하세요
const name = "철수";
const age = 25;
const isStudent = true;

function Profile() {
  return (
    <div>
      {/* 여기에 name, age, isStudent 표시 */}
    </div>
  );
}
```

<details>
<summary>✅ 정답</summary>

```tsx
function Profile() {
  const name = "철수";
  const age = 25;
  const isStudent = true;

  return (
    <div>
      <p>이름: {name}</p>
      <p>나이: {age}세</p>
      <p>학생 여부: {isStudent ? "예" : "아니오"}</p>
    </div>
  );
}
```
</details>

---

## 03. 첫 번째 컴포넌트

Greeting 컴포넌트를 만드세요:

```tsx
// 문제: "안녕하세요!"를 표시하는 Greeting 컴포넌트
function Greeting() {
  // 여기에 코드 작성
}

// 사용
<Greeting />
```

<details>
<summary>✅ 정답</summary>

```tsx
function Greeting() {
  return <h1>안녕하세요!</h1>;
}

// 사용
function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}
```
</details>

---

## 04. Props 기본

Props를 받는 컴포넌트를 만드세요:

```tsx
// 문제: name을 받아서 "안녕하세요, {name}님!" 표시
interface GreetingProps {
  // 타입 정의
}

function Greeting(props) {
  // 여기에 코드 작성
}

// 사용
<Greeting name="철수" />
```

<details>
<summary>✅ 정답</summary>

```tsx
interface GreetingProps {
  name: string;
}

function Greeting({ name }: GreetingProps) {
  return <h1>안녕하세요, {name}님!</h1>;
}

// 또는
function Greeting(props: GreetingProps) {
  return <h1>안녕하세요, {props.name}님!</h1>;
}
```
</details>

---

## 05. 여러 Props

여러 Props를 받는 컴포넌트를 만드세요:

```tsx
// 문제: UserCard 컴포넌트 만들기
// - name: 문자열 (필수)
// - age: 숫자 (필수)
// - email: 문자열 (선택)

interface UserCardProps {
  // 타입 정의
}

function UserCard() {
  // 여기에 코드 작성
}

// 사용
<UserCard name="철수" age={25} />
<UserCard name="영희" age={28} email="young@email.com" />
```

<details>
<summary>✅ 정답</summary>

```tsx
interface UserCardProps {
  name: string;
  age: number;
  email?: string;  // 선택적
}

function UserCard({ name, age, email }: UserCardProps) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>나이: {age}세</p>
      {email && <p>이메일: {email}</p>}
    </div>
  );
}
```
</details>

---

## 06. children Props

children을 받는 컴포넌트를 만드세요:

```tsx
// 문제: Card 컴포넌트 만들기
// - title: 문자열
// - children: 내부 콘텐츠

function Card() {
  // 여기에 코드 작성
}

// 사용
<Card title="공지사항">
  <p>오늘 회의가 있습니다.</p>
  <p>참석 부탁드립니다.</p>
</Card>
```

<details>
<summary>✅ 정답</summary>

```tsx
interface CardProps {
  title: string;
  children: React.ReactNode;
}

function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
```
</details>

---

## 07. Button 컴포넌트

실전 Button 컴포넌트를 만드세요:

```tsx
// 문제: Button 컴포넌트 만들기
// - label: 버튼 텍스트 (필수)
// - onClick: 클릭 핸들러 (필수)
// - variant: "primary" | "secondary" (선택, 기본값 "primary")
// - disabled: boolean (선택, 기본값 false)

function Button() {
  // 여기에 코드 작성
}

// 사용
<Button label="클릭" onClick={() => alert('클릭!')} />
<Button label="취소" onClick={() => {}} variant="secondary" />
<Button label="비활성" onClick={() => {}} disabled />
```

<details>
<summary>✅ 정답</summary>

```tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

function Button({ 
  label, 
  onClick, 
  variant = "primary", 
  disabled = false 
}: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
```
</details>

---

## 💡 핵심 정리

```tsx
// JSX 기본
<div className="container">  {/* class → className */}
  {변수}                      {/* 중괄호로 JS 표현식 */}
</div>

// 컴포넌트 정의
function MyComponent() {
  return <div>Hello</div>;
}

// Props 타입 정의
interface Props {
  name: string;        // 필수
  age?: number;        // 선택적
  children?: React.ReactNode;
}

// Props 사용 (구조분해)
function MyComponent({ name, age = 0 }: Props) {
  return <div>{name}, {age}</div>;
}

// 조건부 렌더링
{isTrue && <div>참일 때만 표시</div>}
{isTrue ? <A /> : <B />}
```
