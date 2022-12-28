import React from "react";
//Import Components
import Todo from "./Todo"


const todoList = ({todos,setTodos,filteredTodos}) => {
    return(
        <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(todo=>(
            <Todo 
            key={todo.id}
            todo={todo}
            text = {todo.text}
            todos = {todos}
            setTodos = {setTodos}
            />
        ))}
      </ul>
    </div>
    )
}

export default todoList;