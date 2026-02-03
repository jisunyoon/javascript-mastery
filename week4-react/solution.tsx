// 01. useToggle (커스텀 훅)
// true/false 토글!
const useToggle = (initialValue = false) => {
  const [ value, setValue ] = useState(initialValue);
  const toggle = () => {
    setValue(prev => !prev);
  }

   return [value, toggle]
};

// 사용
function Modal() {
  const [isOpen, toggle] = useToggle(false);
  
  return (
    <div>
      <button onClick={toggle}>
        {isOpen ? '닫기' : '열기'}
      </button>
      {isOpen && <p>모달 내용!</p>}
    </div>
  );
}

// 02. useInput (커스텀 훅)
// input 상태 관리!
const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  const reset = () => {
    setValue(initialValue);
  }
  return { value, onChange, reset }
};

// 사용
function Form() {
  const name = useInput('');
  const email = useInput('');
  
  return (
    <form>
      <input value={name.value} onChange={name.onChange} />
      <input value={email.value} onChange={email.onChange} />
      <button onClick={name.reset}>초기화</button>
    </form>
  );
}

// 03. useFetch (커스텀 훅)
// fetch + loading + error 관리!
const useFetch = (url) => {
  const [data,setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setData(data);
      setLoading(false)
;    })
    .catch((error) => {
      setLoading(false);
      setError(error.message)
    })
  }, [])

   return { data, loading, error }
};

// 사용
function UserList() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');
  
  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러: {error}</p>;
  return <ul>{data?.map(user => <li key={user.id}>{user.name}</li>)}</ul>;
}


// 04. useLocalStorage (커스텀 훅)
// localStorage + 상태 동기화!
const useLocalStorage = (key, initialValue) => {
  // 작성
   const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    if(saved) {
      return JSON.parse(saved);
    }else{
      initialValue;
    }
   })

   useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
   }, [value])

   return [value, setValue];
};

// 사용
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      현재: {theme}
    </button>
  );
}

// 05. Modal 컴포넌트 
// isOpen이면 모달 표시!
function Modal({ isOpen, onClose, children }) {
  if(!isOpen) return null;
  
  return(
    <div>
        {children}
        <button onClick={onClose}>닫기</button>
    </div>
  )
}

// 사용
function App() {
  const [show, setShow] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShow(true)}>열기</button>
      <Modal isOpen={show} onClose={() => setShow(false)}>
        <h1>모달 제목</h1>
        <p>모달 내용</p>
      </Modal>
    </div>
  );
}

// 06. Tabs 컴포넌트 
// 탭 클릭하면 내용 변경!
function Tabs({ tabs, defaultIndex = 0 }) {
   const [activeIndex, setActiveIndex] = useState(defaultIndex);

   return (
    <div>
      {
        tabs.map((tab,index) => (
          <button key={index} onClick={() => {
            setActiveIndex(index)
          }}>{tab.label}</button>
        ))
      }
      {tabs[activeIndex].content}
    </div>
   )
}

// 사용
function App() {
  return (
    <Tabs tabs={[
      { label: '홈', content: <p>홈 내용</p> },
      { label: '소개', content: <p>소개 내용</p> },
      { label: '연락처', content: <p>연락처 내용</p> },
    ]} />
  );
}

// 07. useCallback
function TodoList() {
  const [todos, setTodos] = useState(['리액트', '타입스크립트']);
  const [input, setInput] = useState('');

  // useCallback으로 감싸기!
  const addTodo = useCallback(() => {
    setTodos(prev => [...prev, input]);
    setInput('');
  }, [input])

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTodo}>추가</button>
      <ul>{todos.map(todo => <li key={todo}>{todo}</li>)}</ul>
    </div>
  );
}

// useEffect와 useCallback 차이
// useEffect = "이거 실행해!" 목적: 코드 실행
// useCallback = "이 함수 기억해!" 목적: 함수 저장 , 계산 값을 저장하는건 useMemo
// useRef = "값을 기억은 하고 싶은데, 리렌더링은 싫어!"