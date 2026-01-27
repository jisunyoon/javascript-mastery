// ========================================
// 01. 기본 라우팅
// 홈, 소개, 연락처 페이지 만들기
// ========================================
import { BrowserRouter, Routes, Route, Link, Outlet, useParams, useNavigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">홈</Link>
        <Link to="/about">소개</Link>
        <Link to="/contact">연락처</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>홈</h1>; }
function About() { return <h1>소개</h1>; }
function Contact() { return <h1>연락처</h1>; }


// ========================================
// 02. 중첩 라우팅
// /users → 유저 목록
// /users/1 → 유저 상세
// ========================================
function AppWithUsers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />}>
            <Route index element={<UserList />} />
            <Route path=":id" element={< UserDetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Users() {
  return (
    <div>
      <h1>유저 페이지</h1>
      <Outlet />
    </div>
  );
}

function UserList() {
  return (
    <ul>
      <li><Link to="/users/1">유저 1</Link></li>
      <li><Link to="/users/2">유저 2</Link></li>
    </ul>
  );
}


// ========================================
// 03. useParams
// /users/123 → id = "123"
// ========================================
function UserDetail() {
  const {id} = useParams();
  
  return <h1>유저 ID: {id}</h1>;
}


// ========================================
// 04. useNavigate
// 버튼 클릭으로 페이지 이동
// ========================================
function LoginButton() {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    navigate("/login");
  };
  
  return <button onClick={handleLogin}>로그인</button>;
}


// ========================================
// 05. Todo 앱에 라우팅 적용
// / → 전체
// /active → 진행 중
// /completed → 완료
// ========================================
function TodoApp() {
  const [todos] = useState([
    { id: 1, text: '리액트 배우기', completed: true },
    { id: 2, text: '타입스크립트 배우기', completed: false },
    { id: 3, text: '프로젝트 만들기', completed: false },
  ]);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">전체</Link>
        <Link to="/active">진행 중</Link>
        <Link to="/completed">완료</Link>
      </nav>

      <Routes>
        <Route path="/" element={<TodoList todos={todos} filter="all" />} />
        <Route path="/active" element={<TodoList todos={todos} filter="active" />} />
        <Route path="/completed" element={<TodoList todos={todos} filter="completed" />} />
      </Routes>
    </BrowserRouter>
  );
}

function TodoList({ todos, filter }) {
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <ul>
      {filteredTodos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}