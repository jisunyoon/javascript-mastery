/**
 * Week 1 (수): React JSX, 컴포넌트, Props
 * 
 * 이 파일을 React 프로젝트의 App.tsx에 복사해서 테스트하세요
 * 또는 mini-projects/todo-app에서 실습하세요
 */

// ========================================
// 01. JSX 기본 문법
// ========================================
// 아래 HTML을 JSX로 변환하세요
// <div class="container">
//   <h1>안녕하세요</h1>
//   <p>React 학습 중입니다</p>
// </div>

function Exercise01() {
  return (
    <div class="container">
      <h1>안녕하세요</h1>
      <p>React 학습 중입니다</p>
    </div>
  );
}


// ========================================
// 02. 변수 삽입
// ========================================
function Exercise02() {
  const name = "철수";
  const age = 25;
  const isStudent = true;

  return (
    <div>
        <p>이름: {name}</p>
        <p>나이: {age}</p>
        <p>학생 여부: {isStudent ? "true" : "false"}</p>
    </div>
  );
}


// ========================================
// 03. 첫 번째 컴포넌트
// ========================================
// "안녕하세요!"를 표시하는 Greeting 컴포넌트

function Greeting() {
  return <p>안녕하세요!</p>;
}


// ========================================
// 04. Props 기본
// ========================================
// name을 받아서 "안녕하세요, {name}님!" 표시

interface GreetingWithNameProps {
  name: string;
}

function GreetingWithName({name}: GreetingWithNameProps) {
  return <p>안녕하세요, {name}님!</p>;
}


// ========================================
// 05. 여러 Props
// ========================================
// UserCard 컴포넌트
// - name: 문자열 (필수)
// - age: 숫자 (필수)
// - email: 문자열 (선택)

interface UserCardProps {
  name: string,
  age: number,
  email?: string
}

function UserCard({name, age, email} : UserCardProps) {
  return 
  <div>
    <p>이름 : {name}</p>
    <p>나이 : {age}</p>
    {email && <p>이메일 : {email}</p>}
  </div>;
}


// ========================================
// 06. children Props
// ========================================
// Card 컴포넌트 (title + children)

interface CardProps {
  title: string,
  children: React.ReactNode
}

function Card({title,children}: CardProps) {
  return (
    <div>
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  )
}


// ========================================
// 07. Button 컴포넌트
// ========================================
// - label: 버튼 텍스트 (필수)
// - onClick: 클릭 핸들러 (필수)
// - variant: "primary" | "secondary" (선택)
// - disabled: boolean (선택)

interface ButtonProps {
  label: string,
  onClick: () => void;
  variant?: "primary" | "secondary"
  disabled?: boolean;
}

function Button({
  label,
  onClick,
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: variant === 'primary' ? '#eee' : '#000',
      }}
    >
      {label}
    </button>
  );
}


// ========================================
// App (테스트용)
// ========================================
function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Week 1: React 실습</h1>
      
      <h2>01. JSX 기본</h2>
      <Exercise01 />
      
      <h2>02. 변수 삽입</h2>
      <Exercise02 />
      
      <h2>03. Greeting</h2>
      <Greeting />
      
      <h2>04. GreetingWithName</h2>
      <GreetingWithName name="지선" />

      
      <h2>05. UserCard</h2>
      <UserCard name="지선" age={31} email="jisun@naver.com"/>
      
      <h2>06. Card</h2>
      <Card title="공지사항"><p>내용입니다</p></Card>
      
      <h2>07. Button</h2>
      <Button label="클릭" onClick={() => alert('클릭!')} />
    </div>
  );
}

export default App;
