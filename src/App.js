import React,{useState,useEffect} from 'react';
import './App.css';
// import { Header } from 'react-bootstrap';
import Form from "./components/form"
import Todolist from "./components/Todolist"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [inputText, setInputText] = useState("");
  const [todos,setTodos]= useState([]);
  const[status,setStatus]=useState("all");
  const[filteredTodos,setFilteredTodos]=useState([]);

  useEffect(()=>{
    filterHandler();
  },[todos,status]);

  const filterHandler = () => {

    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
        case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
        default:
          setFilteredTodos(todos);
          break;

    }
  }

const saveLocalTodos =()=>{
  
}

  return (
    <div className="App">
    
<header>
      <h1>Anikets TODO list </h1>
      </header>
    {/* note: you can use any name for setTodos or setInputText  */}

      <Form 
      todos={todos}
       setTodos={setTodos} 
       setInputText={setInputText} 
       inputText={inputText}
       setStatus={setStatus}
       status={status}
     
       />

      <Todolist
       setTodos={setTodos} 
       todos={todos}
       filteredTodos={filteredTodos}
       
       />
      
      
      
    </div>
  );
}

export default App;
