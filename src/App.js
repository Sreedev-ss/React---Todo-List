import React,{useState,useEffect} from 'react';
import './App.css';
//Components
import Form from './Components/Form'
import TodoList from './Components/todoList'


function App() {

  useEffect(()=>{
    getLocalTodos();
  },[])

  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo)=> todo.completed == true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo)=> todo.completed == false));
        break;
      default: setFilteredTodos(todos);
      break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if(localStorage.getItem("todos").length == 2){
      localStorage.setItem("todos", JSON.stringify([]))
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);
    }
  }

  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  },[todos,status])

  return (
    <div className="App">
      <header>
      <h1>To-Do List </h1>
      </header>
      <Form 
      setInputText = {setInputText}
      inputText = {inputText} 
      todos = {todos} 
      setTodos = {setTodos}
      setStatus = {setStatus}
      />
      <TodoList
      todos = {todos}
      setTodos = {setTodos}
      filteredTodos = {filteredTodos}
      />
    </div>
  );
}

export default App;
