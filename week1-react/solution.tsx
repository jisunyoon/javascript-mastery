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
    // 여기에 JSX 작성
    <div>Exercise 01</div>
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
      {/* name, age, isStudent를 표시하세요 */}
    </div>
  );
}


// ========================================
// 03. 첫 번째 컴포넌트
// ========================================
// "안녕하세요!"를 표시하는 Greeting 컴포넌트

function Greeting() {
  // 여기에 코드 작성
  return null;
}


// ========================================
// 04. Props 기본
// ========================================
// name을 받아서 "안녕하세요, {name}님!" 표시

interface GreetingWithNameProps {
  // 타입 정의
}

function GreetingWithName() {
  // 여기에 코드 작성
  return null;
}


// ========================================
// 05. 여러 Props
// ========================================
// UserCard 컴포넌트
// - name: 문자열 (필수)
// - age: 숫자 (필수)
// - email: 문자열 (선택)

interface UserCardProps {
  // 타입 정의
}

function UserCard() {
  // 여기에 코드 작성
  return null;
}


// ========================================
// 06. children Props
// ========================================
// Card 컴포넌트 (title + children)

interface CardProps {
  // 타입 정의
}

function Card() {
  // 여기에 코드 작성
  return null;
}


// ========================================
// 07. Button 컴포넌트
// ========================================
// - label: 버튼 텍스트 (필수)
// - onClick: 클릭 핸들러 (필수)
// - variant: "primary" | "secondary" (선택)
// - disabled: boolean (선택)

interface ButtonProps {
  // 타입 정의
}

function Button() {
  // 여기에 코드 작성
  return null;
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
      {/* <GreetingWithName name="철수" /> */}
      
      <h2>05. UserCard</h2>
      {/* <UserCard name="철수" age={25} /> */}
      
      <h2>06. Card</h2>
      {/* <Card title="공지사항"><p>내용입니다</p></Card> */}
      
      <h2>07. Button</h2>
      {/* <Button label="클릭" onClick={() => alert('클릭!')} /> */}
    </div>
  );
}

export default App;
