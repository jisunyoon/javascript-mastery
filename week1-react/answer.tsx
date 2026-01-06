/**
 * Week 1 (수): React JSX, 컴포넌트, Props - 정답
 */

// 01. JSX 기본 문법
function Exercise01() {
  return (
    <div className="container">
      <h1>안녕하세요</h1>
      <p>React 학습 중입니다</p>
    </div>
  );
}


// 02. 변수 삽입
function Exercise02() {
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


// 03. 첫 번째 컴포넌트
function Greeting() {
  return <h1>안녕하세요!</h1>;
}


// 04. Props 기본
interface GreetingWithNameProps {
  name: string;
}

function GreetingWithName({ name }: GreetingWithNameProps) {
  return <h1>안녕하세요, {name}님!</h1>;
}


// 05. 여러 Props
interface UserCardProps {
  name: string;
  age: number;
  email?: string;
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


// 06. children Props
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


// 07. Button 컴포넌트
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
      style={{
        padding: '8px 16px',
        backgroundColor: variant === 'primary' ? '#007bff' : '#6c757d',
        color: 'white',
        border: 'none',
        borderRadius: 4,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1
      }}
    >
      {label}
    </button>
  );
}


// App
function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Week 1: React 실습 - 정답</h1>
      
      <h2>01. JSX 기본</h2>
      <Exercise01 />
      
      <h2>02. 변수 삽입</h2>
      <Exercise02 />
      
      <h2>03. Greeting</h2>
      <Greeting />
      
      <h2>04. GreetingWithName</h2>
      <GreetingWithName name="철수" />
      
      <h2>05. UserCard</h2>
      <UserCard name="철수" age={25} />
      <UserCard name="영희" age={28} email="young@email.com" />
      
      <h2>06. Card</h2>
      <Card title="공지사항">
        <p>오늘 회의가 있습니다.</p>
        <p>참석 부탁드립니다.</p>
      </Card>
      
      <h2>07. Button</h2>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button label="Primary" onClick={() => alert('클릭!')} />
        <Button label="Secondary" onClick={() => {}} variant="secondary" />
        <Button label="Disabled" onClick={() => {}} disabled />
      </div>
    </div>
  );
}

export default App;
