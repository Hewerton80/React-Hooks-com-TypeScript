import React,{
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  useContext,
} from 'react';

interface User {
  name: string;
  login:string;
  avatar_url : string;
}
const App: React.FC = () =>{
  const inputRef = useRef<HTMLInputElement>(null);
  const [users,setUsers] = useState<[User]>()

  // User é o parâmetro de tipagem que ele recebe
  const names = useMemo(()=> users?.map(user=>user.name).join(", "),[users])
  //users?.map é equivalente a users?users.map:undefined

  async function loadData(){
    const response = await fetch("https://api.github.com/users/Hewerton80");
    const data = await response.json();

  }

  const greetings = useCallback(
    (user: User)=> window.alert(`Hello, ${user.name}`),
    []
  )
  
  function focusInput(){
    inputRef.current?.focus()
    //equivalente a inputRef.current?inputRef.current.focus():undefined
  }
  
  
  return (
    <form>
      <input type="text" ref={inputRef}/>
    </form>
  )
}

export default App;
