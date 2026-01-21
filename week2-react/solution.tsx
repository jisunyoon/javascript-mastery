/**
 * Week 2 (수): React useState, useEffect
 * App.tsx에 복사해서 테스트
 */
import { useState, useEffect } from 'react';

// 01. Counter
function Counter() {
  // 작성
  const [count,setCount] = useState(0);

  const handleAddCount = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>{count}</p>
      <div>
        <button onClick={handleAddCount}>+1</button>
        <button onClick={() => setCount(count -1)}>-1</button>
      </div>
    </div>
  )
}

// 02. UserForm
function UserForm() {
  // user: { name, age }
  const [ name, setName ] = useState('');
  const [ age, setAge ] = useState(0);
  const [ submitted, setSubmitted ] = useState(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(Number(e.target.value));
  }
  
  const handleSubmit = () => {
    setSubmitted({name,age});
  }
  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <input type="number" value={age} onChange={handleAgeChange} />
      <button onClick={handleSubmit}>
        {submitted ? 'Submitted' : 'Submit'}
      </button>
    </div>
  )
}

// function UserForm (){
//   const [user, setUser] = useState({name: '', age: 0});
//   const [ submitted, setSubmitted ] = useState(null);

//   const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setUser({...user, name: e.target.value});
//   }
//   const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setUser({...user, age: Number(e.target.value)});
//   }
//   const handleSubmit = () => {
//     setUser({name:user.name, age:user.age});
//   }
//   return (
//     <div>
//       <input type="text" value={name} onChange={handleNameChange} />
//       <input type="number" value={age} onChange={handleAgeChange} />
//       <button onClick={handleSubmit}>
//         {submitted ? 'Submitted' : 'Submit'}
//       </button>
//     </div>
//   )
// }

// 03. MountLogger
function MountLogger() {
  useEffect(()=>{
    console.log('mount');

    return () => {
      console.log('unmount');
    }
  }, [])


  return <div>MountLogger</div>;
}

// 04. TitleUpdater
function TitleUpdater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count : ${count}`
  }, [count])
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}

// 05. Timer
function Timer() {
  const [ seconds, setSeconds ] = useState(0);
  const [ isRunning, setIsRunning ] = useState(false);

  useEffect(() => {
    if(isRunning){
      const timer = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);

      return () => {
        clearInterval(timer)
      }
    }
  }, [isRunning])
  return (
    <div>
      <p>{seconds}</p>
      <button onClick={() => {setIsRunning(!isRunning)}}>
        {isRunning ? '정지' : '시작'}
      </button>
    </div>
  )
}

// 06. UserList
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://test.test.com/user')
    .then(res => res.json())
    .then(data => {
      setUsers(data);
      setLoading(false);
    })
    .catch(error => {
      setError(error.message);
      setLoading(false);
    })
  }, [])
  return (
    <div>
      {loading && <p>로딩중...</p>}
      {error && <p>에러</p>}
      {!loading && !error && (
        <div>
          {users.map(user => (
            <div key={user.id}>{user.name}</div>
          ))}
        </div>
      )}
    </div>

  );
}

// 07. SearchInput
function SearchInput() {
  const [query, setQuery] = useState('');          
  const [debouncedQuery, setDebouncedQuery] = useState(''); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query)
    }, 300);
    return () => {
      clearTimeout(timer);
    }
  }, [query])
  return (
    <div>
      <input 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <p>입력: {query}</p>
      <p>검색어: {debouncedQuery}</p>
    </div>
  );
}

// App
function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Week 2: React</h1>
      <h2>01. Counter</h2>
      <Counter />
      <h2>02. UserForm</h2>
      <UserForm />
      <h2>03. MountLogger</h2>
      <MountLogger />
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
